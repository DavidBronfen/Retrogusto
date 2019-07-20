export interface IRecipes {
  id: Number;
  title: String;
  image_path: String;
  rating: Number;
  description: String;
  prep_time: String;
  portions: Number;
  calories: Number;
}

export interface IRecipesResponse {
  recipes: IRecipes[];
  _message: string;
}
