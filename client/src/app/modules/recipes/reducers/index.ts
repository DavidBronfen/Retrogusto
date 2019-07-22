import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromRecipes from './recipes';

export interface State {
  recipes: fromRecipes.State;
}

export const reducers: ActionReducerMap<State> = {
  recipes: fromRecipes.recipesReducer,
};

export const getRecipesState = createFeatureSelector<fromRecipes.State>('recipes');
export const getRecipes = createSelector(
  getRecipesState,
  state => state.recipes
);
