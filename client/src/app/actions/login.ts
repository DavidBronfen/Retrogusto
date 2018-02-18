import { Action } from '@ngrx/store';
import { ILogin, ILoginToken} from '../models/login';

export enum LoginActionTypes {
  LOGIN =  '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login Success',
  LOGIN_FAILED = '[Login] Login Failed',
}

export class LoginAction implements Action {
  readonly type = LoginActionTypes.LOGIN;

  constructor(public payload: ILogin) {}
}

export class LoginSuccessAction implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;

  constructor(public payload: ILoginToken) {}
}

export class LoginFailedAction implements Action {
  readonly type = LoginActionTypes.LOGIN_FAILED;

  constructor(public payload: any) {}
}

export type Actions
  = LoginAction
  | LoginSuccessAction
  | LoginFailedAction
