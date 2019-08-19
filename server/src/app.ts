import * as bodyParser from "body-parser";
import * as express from "express";
import * as session from "express-session";
import * as passport from "passport";
import * as mongo from "connect-mongo";

import categoryRoutes from "./api/category/categoryRoutes";
import recipeRoutes from "./api/recipe/recipeRoutes";
import authRoutes from "./api/auth/authRoutes";

// API keys and Passport configuration
import * as passportConfig from "./config/passport-config";
import { IConfigModel } from "./config/config.model";
import ConfigService from "./config/configService";

const router: express.Router = express.Router();

/**
 * @class Api
 */
export class App {
    public app: express.Application;
    private MongoStore = mongo(session);
    private config: IConfigModel = ConfigService.appConfig;

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
            store: new this.MongoStore({
                url: this.config.db
            })
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
      this.app.use("/api/categories", passportConfig.isAuthenticated, categoryRoutes);
      this.app.use("/api/recipes", recipeRoutes);
      this.app.use("/api/auth", authRoutes);
  }
}
