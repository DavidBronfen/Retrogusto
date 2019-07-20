import { Action } from '@ngrx/store';
import { IRecipesResponse } from '../models/recipes';


export enum RecipesActionTypes {
  LOAD_RECIPES =  '[Recipes] Load Recipes',
  LOAD_RECIPES_SUCCESS = '[Recipes] Load Recipes Success',
  LOAD_RECIPES_FAILED = '[Recipes] Load Recipes Failed',
}

export class LoadRecipesAction implements Action {
  readonly type = RecipesActionTypes.LOAD_RECIPES;

  constructor() { }
}

export class LoadRecipesSuccessAction implements Action {
  readonly type = RecipesActionTypes.LOAD_RECIPES_SUCCESS;

  constructor(public payload: IRecipesResponse) { }
}

export class LoadRecipesFailedAction implements Action {
  readonly type = RecipesActionTypes.LOAD_RECIPES_FAILED;

  constructor(public payload: any) { }
}

export type Actions
  = LoadRecipesAction
  | LoadRecipesSuccessAction
  | LoadRecipesFailedAction;
