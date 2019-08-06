import { Router } from "express";
import * as passport from "passport";
import "../../config/passport-config";

const router: Router = Router();

// auth login
router.route("/login")
    .get((req, res) => {
        res.send("You are logging in");
    });

// auth logout
// TODO - move the logout endpoint to the user route.
router.route("/logout")
    .get((req, res) => {
        req.logout();
    });

// auth with google+
router.route("/google")
    .get(passport.authenticate("google", {
        scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"]
    }));

// callback route for google to redirect to
router.route("/google/redirect")
    .get(passport.authenticate("google"), (req, res) => {
        res.cookie("userAuthToken", req.user.token);
        res.redirect("http://localhost:4200");
    });

export default router;
