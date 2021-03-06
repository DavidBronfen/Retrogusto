import { Router } from "express";
import * as passport from "passport";

import "../../config/passport-config";
import { IConfigModel } from "../../config/config.model";
import ConfigService from "../../config/configService";

const config: IConfigModel = ConfigService.appConfig;
const router: Router = Router();

// auth login
router.route("/login")
    .get((req, res) => {
        res.send("You are logging in");
    });

// auth logout
router.route("/logout")
    .get((req, res) => {
        req.logOut();
        res.redirect(config.client.url);
    });

// auth with google+
router.route("/google")
    .get(passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ]
    }));

// callback route for google to redirect to
router.route("/google/redirect")
    .get(passport.authenticate("google"), (req, res) => {
        res.redirect(config.client.url);
    });

export default router;
