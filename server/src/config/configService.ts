import * as dotenv from "dotenv";
import * as _ from "lodash";
import Seed from "../util/seed";
import { IConfigModel } from "./config.model";

let configService: IConfigModel = {
    db: "",
    environment: "",
    logging: false, // enable logging for development
    port: process.env.PORT || 4000,
    seed: false,
};

/**
 * Load testing or production environment variables.
 *
 * @return configuration based on environment.
 */
function configDB() {
    process.env.NODE_ENV = process.env.NODE_ENV || "development";
    configService.environment = process.env.NODE_ENV;
    return require(`./envs/${process.env.NODE_ENV}`);
}

/**
 * Load seed data.
 *
 * @return void
 */
function loadSeed() {
    if (configService.seed) {
        const seed = new Seed(configService);
        seed.seeding();
    }
}

/**
 * Add secret data to the configService.
 *
 * @return void
 */
function configSecret() {
    if (process.env.NODE_ENV !== "production") {
        configService.secret = {
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
configService = _.merge(configService, envConfig, envSecret);
loadSeed();

export default {
    get appConfig() {
        return Object.assign({}, configService);
    },
};
