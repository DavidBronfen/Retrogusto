import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

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
