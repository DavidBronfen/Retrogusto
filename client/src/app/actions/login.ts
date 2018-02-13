import { Action } from '@ngrx/store';
import { ILoginToken } from '../models/login';

export const LOGIN_USER =  '[Login] Login User';
export const LOGIN_USER_SUCCESS =  '[Login] Login User Success';
export const LOGIN_USER_FAILED =  '[Login] Login User Failed';

export class LoginUserAction implements Action {
  readonly type = LOGIN_USER;

  constructor() { }
}

export class LoginUserSuccessAction implements Action {
  readonly type = LOGIN_USER_SUCCESS;

  constructor(public payload: ILoginToken) {}
}

export class LoginUserSuccessFailed implements Action {
  readonly type = LOGIN_USER_FAILED;

  constructor() {}
}

export type Actions
  = LoginUserAction
  | LoginUserSuccessAction
  | LoginUserSuccessFailed;
