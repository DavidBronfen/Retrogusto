import { createAction, props } from '@ngrx/store';
import { ICategoryResponse } from '../models/category';


export const loadCategories = createAction(
  '[Categories] Load Categories',
);

export const loadCategoriesSuccess = createAction(
  '[Categories] Load Categories Success',
  props<{response: ICategoryResponse}>()
);

export const loadCategoriesFailed = createAction(
  '[Categories] Load Categories Failed',
  props<{error: any}>()
)

