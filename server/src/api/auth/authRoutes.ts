import { Router } from "express";
import { asyncMiddleware } from "../../util/asyncMiddleware";

const router: Router = Router();

// auth login
router.route("/login")
    .get((req, res) => {
        res.send("You are logging in");
    });

// auth logout
router.route("/logout")
    .get((req, res) => {
        res.send("You are logging out");
    });

// auth with google+
router.route("/google")
    .get((req, res) => {
        // handle with passport
        res.send("Logging in with Google");
    });

export default router;
