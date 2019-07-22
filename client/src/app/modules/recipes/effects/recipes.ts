import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, map, catchError} from 'rxjs/operators';

import { RecipesService } from '../services/recipes.service';
import * as recipeActions from '../actions/recipes';

@Injectable()
export class RecipesEffects {
  constructor(
    private actions$: Actions,
    private recipesService: RecipesService
  ) { }

  @Effect()
  loadrecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeActions.loadRecipes),
      exhaustMap(() =>
        this.recipesService.getRecipes().pipe(
          map(data => recipeActions.loadRecipesSuccess({response: data})),
          catchError(() => of({ type: 'LOAD_RECIPES_FAILED'}))
        )
      )
    )
  )
}
