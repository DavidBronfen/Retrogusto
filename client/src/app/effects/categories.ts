import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, map, catchError} from 'rxjs/operators';

import { CategoriesService } from '../services/categories.service';
import * as categoryActions from '../actions/categories';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) { }

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryActions.loadCategories),
      exhaustMap(() =>
        this.categoriesService.getCategories().pipe(
          map(data => categoryActions.loadCategoriesSuccess({response: data})),
          catchError(() => of({ type: 'LOAD_CATEGORIES_FAILED'}))
        )
      )
    )
  );
}
