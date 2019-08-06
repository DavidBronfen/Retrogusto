import * as passport from "passport";
import * as passportLocal from "passport-local";
import * as passportGoogle from "passport-google-oauth20";

import { User } from "../api/user/userModel";
import { IConfigModel } from "./config.model";
import Config from "./config";

const LocalStrategy = passportLocal.Strategy;
const GoogleStrategy = passportGoogle.Strategy;
const config: IConfigModel = new Config().config;

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user: any) => {
        if (err) { return done(err); }
        if (!user) {
            return done(undefined, false, { message: `Email ${email} not found.` });
        }
        user.comparePassword(password, (error: Error, isMatch: boolean) => {
            if (error) { return done(error); }
            if (isMatch) {
                return done(undefined, user);
            }
            return done(undefined, false, { message: "Invalid email or password." });
        });
    });
}));

/**
 * Sign in with google.
 */
passport.use(
    new GoogleStrategy({
        // options for the google strategy.
        callbackURL: "/auth/google/redirect",
        clientID: config.secret.googleAuth.clientID,
        clientSecret: config.secret.googleAuth.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists.
        User.findOne({email: profile.emails[0].value}).then(user => {
            if (user) {
                // user already exists
                done(null, user);
            } else {
                // user not exist, create new user
                new User({
                    first_name: profile.name.givenName,
                    last_name: profile.name.familyName,
                    user_name: profile.displayName,
                    email: profile.emails[0].value,
                    token: accessToken
                }).save()
                    .then(newUser => {
                        done(null, newUser);
                    });
            }
        });
    })
);
