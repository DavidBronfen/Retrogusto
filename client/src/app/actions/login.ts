import { Action } from '@ngrx/store';

export const TOGGLE_LOGIN_POPUP =  '[Login] Toggle Login Popup';

export class ToggleLoginPopupAction implements Action {
  readonly type = TOGGLE_LOGIN_POPUP;

  constructor() { }
}

export type Actions
  = ToggleLoginPopupAction;
