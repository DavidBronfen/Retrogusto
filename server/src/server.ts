import * as chalk from "chalk";
import * as express from "express";
import * as mongoose from "mongoose";

import { App } from "./app";
import Config from "./config/config";

/**
 * @class Server
 */
export class Server {
    public app: express.Application;
    public config: any;

    /**
     * @class Api
     * @constructor
     */
    constructor() {
        this.app = new App().app;
        this.config = new Config();
        this.connectMongoDB();
        this.configureExpress();
    }

    /**
     * Connect to MongoDB.
     *
     * @class Server
     * @method connectMongoDB
     * @return void
     */
    private connectMongoDB() {
        (mongoose as any).Promise = global.Promise;
        mongoose.connect(`${this.config.config.db}`, {useNewUrlParser: true});
        mongoose.connection.on("error", () => {
            console.error("MongoDB connection error. Please make sure MongoDB is running.");
            process.exit(1);
        });
    }

    /**
     * Express configuration.
     *
     * @class Server
     * @method configureExpress
     * @return void
     */
    private configureExpress() {
        this.app.set("port", process.env.PORT || 3000);
        if (!module.parent) {
            this.app.listen(this.app.get("port"), () => {
                // tslint:disable-next-line:max-line-length
                console.log(chalk.default.cyan(`✨ App is running at http://localhost:${this.app.get("port")} in ${this.app.get("env")} mode ✨`));
                console.log(chalk.default.red(`✨ Press CTRL-C to stop✨\n`));
            });
        }
    }
}

// Export for testing
export default new Server();
