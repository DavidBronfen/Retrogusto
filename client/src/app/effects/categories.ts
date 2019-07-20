import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { exhaustMap, map, catchError} from 'rxjs/operators';

import { CategoriesService } from '../services/categories.service';
import { CategoriesActionTypes, LoadCategoriesSuccessAction } from '../actions/categories';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) { }

  @Effect()
  loadCategories$: Observable<Action>= this.actions$.pipe(
    ofType(CategoriesActionTypes.LOAD_CATEGORIES),
    exhaustMap(() =>
      this.categoriesService.getCategories().pipe(
        map(data => new LoadCategoriesSuccessAction(data)),
        catchError(() => of({ type: 'LOAD_CATEGORIES_FAILED'}))
      )
    )
  );
}
