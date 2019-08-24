import * as dotenv from "dotenv";
import * as _ from "lodash";
import Seed from "../util/seed";
import { IConfigModel } from "./config.model";

let appConfig: IConfigModel = {
    db: "",
    environment: "",
    logging: false, // enable logging for development
    port: process.env.PORT || 4000,
    seed: false,
    client: {
        url: ""
    }
};

/**
 * Load testing or production environment variables.
 *
 * @return configuration based on environment.
 */
function configDB() {
    process.env.NODE_ENV = process.env.NODE_ENV || "development";
    appConfig.environment = process.env.NODE_ENV;
    return require(`./envs/${process.env.NODE_ENV}`);
}

/**
 * Load seed data.
 *
 * @return void
 */
function loadSeed() {
    if (appConfig.seed) {
        const seed = new Seed(appConfig);
        seed.seeding();
    }
}

/**
 * Add secret data to the appConfig.
 *
 * @return void
 */
function configSecret() {
    if (process.env.NODE_ENV !== "production") {
        appConfig.secret = {
            googleAuth: {
                clientID: process.env.GOOGLE_APP_ID,
                clientSecret: process.env.GOOGLE_APP_SECRET
            }
        };
    }
}

dotenv.config({path: ".env"});
const envConfig = configDB();
const envSecret = configSecret();
appConfig = _.merge(appConfig, envConfig, envSecret);
loadSeed();

export default {
    get appConfig() {
        return Object.assign({}, appConfig);
    },
};
