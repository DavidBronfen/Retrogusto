import * as _ from "lodash";
import { NextFunction, Request, Response } from "express";

import { Recipe, IRecipeModel } from "./recipeModel";

export interface IRecipe extends Request {
  recipe: IRecipeModel;
}

export interface IRecipes extends Request {
  recipes: IRecipeModel[];
}

/**
 * GET recipe/:id
 * A middleware that find a recipe by id and attach it to the request.
 */
export const params = async (req: IRecipe, res: Response, next: NextFunction, id: string) => {
  try {
    const recipeItem = await Recipe.findById(id);
    if (!recipeItem) {
      res.status(404).json({
        _message: `No recipe item with that id: ${id}`,
        recipe: recipeItem,
      });
    } else {
      req.recipe = recipeItem;
      next();
    }
  } catch (err) {
    res.status(404).json({
      _message: `No recipe item with that id: ${id}`,
      recipe: undefined,
    });
  }
};

/**
 * GET /recipe
 * Get all recipes.
 */
export const getAll = async (req: IRecipes, res: Response, next: NextFunction) => {
  try {
    const recipes = await Recipe.find({});
    res.json({
      _message: "Recipes fetched successfully.",
      recipes
    });
  } catch (err) {
    res.status(404).json({
      _message: `No recipes`,
      recipe: undefined,
    });
    next(err);
  }
};

/**
 * GET /recipe/:id
 * Return a specific recipe.
 */
export const getOne = (req: IRecipe, res: Response) => {
  res.json({
    _message: "Recipe fetched successfully.",
    recipe: req.recipe,
  });
};

/**
 * POST /recipe
 * Create new recipe.
 */
export const createNew = async (req: Request, res: Response) => {
  const newRecipe = new Recipe(req.body);
  const savedRecipe = await newRecipe.save();

  res.json({
    _message: "New recipe successfully created.",
    recipe: savedRecipe
  });
};

/**
 * PUT /recipe
 * Update recipe info and return the new recipe.
 */
export const editFields = async (req: IRecipe, res: Response) => {
  const recipe = req.recipe;
  const update = req.body;

  if (req.body._id && req.body._id !== req.recipe._id) {
    res.status(400);
    return res.json({
      _message: "Recipe can not updated! id is not matched.",
      recipe: undefined,
    });
  }

  _.merge(recipe, update);
  const savedRecipe = await recipe.save();

  res.json({
    _message: "Recipe successfully updated.",
    recipe: savedRecipe
  });
};

/**
 * DELETE /recipe/:id
 * Delete recipe by given id.
 */
export const deleteOne = async (req: IRecipe, res: Response) => {
  const deletedRecipe = await req.recipe.remove();
  res.json({
    _message: "Recipe successfully deleted.",
    recipe: deletedRecipe
  });
};
