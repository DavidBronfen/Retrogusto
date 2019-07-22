import { createReducer, on } from '@ngrx/store';
import { IRecipesResponse } from '../models/recipes';
import * as recipeActions from '../actions/recipes';
import { environment } from '../../../../environments/environment';

export type State = IRecipesResponse;

const initialState: State = {
  recipes: [],
  _message: ''
};

export const recipesReducer = createReducer(
  initialState,
  on(recipeActions.loadRecipes, state => state),
  on(recipeActions.loadRecipesSuccess, (state, {response}) => {
    response.recipes.map(recipe =>
      Object.assign(recipe, { image_path: environment.backend + recipe.image_path })
    );
    return response
  }),
  on(recipeActions.loadRecipesFailed, (state, {error}) => {
    console.log(error);
    return state
  })
)
