import * as dotenv from "dotenv";
import * as _ from "lodash";
import Seed from "./seed";

/**
 * @class Config
 */
export default class Config {
    public config = {
        db: "",
        environment: "",
        logging: false, // enable logging for development
        port: process.env.PORT || 4000,
        seed: false,
    };

    /**
     * @class config
     * @constructor
     */
    constructor() {
        dotenv.config({path: ".env"});
        const envConfig = this.configDB();
        this.config = _.merge(this.config, envConfig);
        this.loadSeed();
    }

    /**
     * Load testing or production environment variables.
     *
     * @class config
     * @method configDB
     * @return void
     */
    private configDB() {
        process.env.NODE_ENV = process.env.NODE_ENV || "development";
        this.config.environment = process.env.NODE_ENV;
        return require(`./envs/${process.env.NODE_ENV}`);
    }

  /**
   * Load seed data.
   *
   * @class config
   * @method loadSeed
   * @return void
   */
  private loadSeed() {
    if (this.config.seed) {
      const seed = new Seed(this.config);
      seed.seeding();
    }
  }

}
