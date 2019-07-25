import { Action, createReducer, on } from '@ngrx/store';

import { ICategoryResponse } from '../models/category';
import * as categoryActions from '../actions/categories';

import { environment } from '../../environments/environment'

export type State = ICategoryResponse;

const initialState: State = {
  categories: [],
  _message: ''
};

export const categoriesReducer = createReducer(
  initialState,
  on(categoryActions.loadCategories, state => state),
  on(categoryActions.loadCategoriesSuccess, (state, {response}) => {
    response.categories.map(category =>
        Object.assign(category, { image_path: environment.backend + category.image_path })
      );
    return response
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return categoriesReducer(state, action);
}
