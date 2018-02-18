import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { LoginService } from '../services/login.service';
import {
  LoginActionTypes,
  LoginAction,
  LoginFailedAction,
  LoginSuccessAction
} from '../actions/login';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType<LoginAction>(LoginActionTypes.LOGIN),
    map(action => action.payload),
    switchMap(loginInfo => {
      return this.loginService.loginUser(loginInfo)
        .pipe(
          map((data) => new LoginSuccessAction(data)),
          catchError(err => of(new LoginFailedAction(err)))
        );
    })
  );
