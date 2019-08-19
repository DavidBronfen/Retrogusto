import * as passport from "passport";
import * as passportLocal from "passport-local";
import * as passportGoogle from "passport-google-oauth20";
import { Request, Response, NextFunction } from "express";

import { User } from "../api/user/userModel";
import { IConfigModel } from "./config.model";
import ConfigService from "./configService";

const LocalStrategy = passportLocal.Strategy;
const GoogleStrategy = passportGoogle.Strategy;
const config: IConfigModel = ConfigService.appConfig;

passport.serializeUser<any, any>((user, done) => {
    done(null, user.id);
});

passport.deserializeUser<any, any>((id, done) => {
    User.findById(id, (err, user) => {
       done(err, user);
    });
});

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({usernameField: "email"}, (email, password, done) => {
    User.findOne({email: email.toLowerCase()}, (err, user: any) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(undefined, false, {message: `Email ${email} not found.`});
        }
        user.comparePassword(password, (error: Error, isMatch: boolean) => {
            if (error) {
                return done(error);
            }
            if (isMatch) {
                return done(undefined, user);
            }
            return done(undefined, false, {message: "Invalid email or password."});
        });
    });
}));

/**
 * Sign in with google.
 */
passport.use(
    new GoogleStrategy({
        // options for the google strategy.
        callbackURL: "/api/auth/google/redirect",
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

/**
 * Login Required middleware.
 */
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    // TODO - redirect user to client login page in order to login first.
    res.redirect("/login");
};
