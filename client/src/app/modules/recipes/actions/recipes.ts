import { createAction, props } from '@ngrx/store';
import { IRecipesResponse } from '../models/recipes';

export const loadRecipes = createAction(
  '[Recipes] Load Recipes',
);

export const loadRecipesSuccess = createAction(
  '[Recipes] Load Recipes Success',
  props<{response: IRecipesResponse}>()
);

export const loadRecipesFailed = createAction(
  '[Recipes] Load Recipes Failed',
  props<{error: any}>()
);
