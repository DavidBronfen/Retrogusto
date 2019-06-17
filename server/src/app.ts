import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";

import * as categoryRoutes from "./api/category/categoryRoutes";

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
   * Register routes.
   *
   * @class Api
   * @method configureRoutes
   * @return void
   */
  private configureRoutes() {
      this.app.use("/category", categoryRoutes.default);
  }

}