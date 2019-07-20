import { Action } from '@ngrx/store';
import { ICategoryResponse } from '../models/category';

export enum CategoriesActionTypes {
  LOAD_CATEGORIES =  '[Categories] Load Categories',
  LOAD_CATEGORIES_SUCCESS = '[Categories] Load Categories Success',
  LOAD_CATEGORIES_FAILED = '[Categories] Load Categories Failed',
}

export class LoadCategoriesAction implements Action {
  readonly type = CategoriesActionTypes.LOAD_CATEGORIES;
}

export class LoadCategoriesSuccessAction implements Action {
  readonly type = CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS;

  constructor(public payload: ICategoryResponse) { }
}

export class LoadCategoriesActionFailed implements Action {
  readonly type = CategoriesActionTypes.LOAD_CATEGORIES_FAILED;
}


export type Actions
  = LoadCategoriesAction
  | LoadCategoriesSuccessAction
  | LoadCategoriesActionFailed;
