import * as _ from "lodash";
import * as chalk from "chalk";
import * as mongoose from "mongoose";

import categories from "./dummy-data/categories";
import recipes from "./dummy-data/recipes";

import { Category } from "../api/category/categoryModel";
import { Recipe } from "../api/recipe/recipeModel";

(mongoose as any).Promise = global.Promise;

/**
 * @class seed.
 */
export default class Seed {
  private config: any;

  /**
   * @class Seed.
   * @constructor
   */
  constructor(config: any) {
    this.config = config;
  }

  /**
   * Set the Databases.
   *
   * @class Seed
   * @method seeding
   * @return void
   */
  public seeding() {
    console.log(chalk.default.yellow("💦  Cleaning the DB 💦"));

    this.cleanDB()
      .then(this.createCategories)
      .then(this.createRecipes);

    // tslint:disable-next-line:max-line-length
    console.log(chalk.default.yellow(`In ${this.config.environment} mode. Seeded DB with ${categories.length} Categories, ${recipes.length} Recipes`));
    console.log(chalk.default.yellow("🎉  Finish seeding the DB 🎉"));
  }

  /**
   * Clean all the database documents.
   *
   * @class Seed
   * @method cleanDB
   * @return void
   */
  private cleanDB() {
    mongoose.connection.dropDatabase().catch(error => {
      console.error("error dropping collections", error);
    });
    console.log(chalk.default.yellow("💪  Start seeding the DB 💪"));
    return new Promise(resolve => { resolve(""); });
  }

  /**
   * Create Categories
   *
   * @class Seed
   * @method createCategories
   * @return void
   */
  private async createCategories(data: any) {
    const newCategories = categories.map(async category => {
      // Save category.
      return new Category(category).save();
    });

    return Promise.all(newCategories)
      .then(savedCategories => {
        return _.merge({ categories: savedCategories }, data || {});
      });
  }

  /**
   * Create Recipes
   *
   * @class Seed
   * @method createRecipes
   * @return void
   */
  private async createRecipes(data: any) {
    const newRecipes = await recipes.map(async recipe => {
      // // Save recipe.
      return new Recipe(recipe).save();
    });

    return Promise.all(newRecipes)
      .then(savedRecipes => {
        return _.merge({ recipes: savedRecipes }, data || {});
      });
  }
}
