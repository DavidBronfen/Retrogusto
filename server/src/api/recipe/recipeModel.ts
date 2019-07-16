import { Document, model, Schema } from "mongoose";

export interface IRecipeModel extends Document {
  _id: string;
  title: string;
  image_path: string;
  rating: number;
  description: string;
  prep_time: string;
  portions: number;
  calories: number;
}

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image_path: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prep_time: {
    type: String,
    required: true,
  },
  portions: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  }
});

export const Recipe = model<IRecipeModel>("recipe", schema, "recipes", true);

export class RecipeModel {
  private recipeModel: IRecipeModel;

  constructor(recipeModel: IRecipeModel) {
    this.recipeModel = recipeModel;
  }
}
