import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ICategory } from '../../models/category';

import * as categoriesAction from '../../actions/categories';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'rg-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories$: Observable<ICategory[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.categories$ = this.store.select(fromRoot.getCategories);
  }

  ngOnInit() {
    this.store.dispatch(new categoriesAction.LoadCategoriesAction());
  }

}
