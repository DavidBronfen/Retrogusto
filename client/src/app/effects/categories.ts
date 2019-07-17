import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable ,  of } from 'rxjs';

import { CategoriesService } from '../services/categories.service';
import * as categories from '../actions/categories';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) { }

  @Effect()
  loadCategories$: Observable<Action>= this.actions$
    .ofType(categories.LOAD_CATEGORIES)
    .switchMap(() => this.categoriesService.getCategories()
      .map(data => new categories.LoadCategoriesSuccessAction(data))
      .catch(() => of({ type: 'LOAD_CATEGORIES_FAILED'}))
    );
}
