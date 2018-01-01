import { Action } from '@ngrx/store';
import { ICategory } from '../models/category';

export const LOAD_CATEGORIES =  '[Categories] Load Categories';
export const LOAD_CATEGORIES_SUCCESS = '[Categories] Load Categories Success';
export const LOAD_CATEGORIES_FAILED = '[Categories] Load Categories Failed';

export class LoadCategoriesAction implements Action {
  readonly type = LOAD_CATEGORIES;

  constructor() { }
}

export class LoadCategoriesSuccessAction implements Action {
  readonly type = LOAD_CATEGORIES_SUCCESS;

  constructor(public payload: ICategory[]) { }
}

export class LoadCategoriesActionFailed implements Action {
  readonly type = LOAD_CATEGORIES_FAILED;

  constructor() { }
}


export type Actions
  = LoadCategoriesAction
  | LoadCategoriesSuccessAction
  | LoadCategoriesActionFailed;
