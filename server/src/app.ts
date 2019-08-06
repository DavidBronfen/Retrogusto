import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as session from "express-session";
import * as passport from "passport";

import categoryRoutes from "./api/category/categoryRoutes";
import recipeRoutes from "./api/recipe/recipeRoutes";
import authRoutes from "./api/auth/authRoutes";

const router: express.Router = express.Router();

/**
 * @class Api
 */
export class App {
    public app: express.Application;

    /**
     * @class Api
     * @constructor
     */
    constructor() {
        this.app = express();
        this.configMiddleware();
        this.configureSessionWithPassport();
        this.configureRoutes();
    }

    /**
     * Register middlewares.
     *
     * @class Api
     * @method configMiddleware
     * @return void
     */
    private configMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
    }

    /**
     * Configure session and initialize passport.
     *
     * @class Api
     * @method configureSession
     * @return void
     */
    private configureSessionWithPassport() {
        this.app.use(session({
            resave: true,
            saveUninitialized: true,
            secret: process.env.SESSION_SECRET,
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

   /**
    * Register routes.
    *
    * @class Api
    * @method configureRoutes
    * @return void
    */
  private configureRoutes() {
      this.app.use("/static", express.static("src/assets"));
      this.app.use("/categories", categoryRoutes);
      this.app.use("/recipes", recipeRoutes);
      this.app.use("/auth", authRoutes);
  }
}
