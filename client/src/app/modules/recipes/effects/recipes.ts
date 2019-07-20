import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { exhaustMap, map, catchError} from 'rxjs/operators';

import { RecipesService } from '../services/recipes.service';
import { RecipesActionTypes, LoadRecipesSuccessAction } from '../actions/recipes';

@Injectable()
export class RecipesEffects {
  constructor(
    private actions$: Actions,
    private recipesService: RecipesService
  ) { }

  @Effect()
  loadrecipes$: Observable<Action>= this.actions$.pipe(
    ofType(RecipesActionTypes.LOAD_RECIPES),
    exhaustMap(() =>
      this.recipesService.getRecipes().pipe(
        map(data => new LoadRecipesSuccessAction(data)),
        catchError(() => of({ type: 'LOAD_RECIPES_FAILED'}))
      )
    )
  )
}
