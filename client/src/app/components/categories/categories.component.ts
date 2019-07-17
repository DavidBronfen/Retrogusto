import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ICategory } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';

import * as categoriesAction from '../../actions/categories';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'rg-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories$: Observable<ICategory[]>;
  private errorMessage: string;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.categories$ = this.store.select(fromRoot.getCategoriesState);
  }

  ngOnInit() {
    this.store.dispatch(new categoriesAction.LoadCategoriesAction());
  }

}
