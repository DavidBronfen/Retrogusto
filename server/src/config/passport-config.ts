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

passport.use(
    new GoogleStrategy({
        // options for the google strategy.
        callbackURL: "/auth/google/redirect",
        clientID: config.secret.googleAuth.clientID,
        clientSecret: config.secret.googleAuth.clientSecret,
    }, () => {
        // passport callback function.
    })
);
