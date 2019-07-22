import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromCategories from './categories';

export interface State {
  categories: fromCategories.State;
}

export const reducer: ActionReducerMap<State> = {
  categories: fromCategories.reducer,
};


export const getCategoriesState = createFeatureSelector<fromCategories.State>('categories');
export const getCategories = createSelector(
  getCategoriesState,
  state => state.categories
);
