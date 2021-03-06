import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IRecipes } from './models/recipes';

import { loadRecipes } from './actions/recipes';
import * as fromRoot from './reducers';


@Component({
  selector: 'rg-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  private categoryName: String;
  public recipes$: Observable<IRecipes[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute,
  ) {
    this.recipes$ = this.store.select(fromRoot.getRecipes);
  }

  ngOnInit() {
    // This is an infrastructure that will serve us in the future when the request
    // will be made from an actual server,
    // in order to bring the recipes by the category name.
    this.activatedRoute.params.subscribe((params: Params) => {
        this.categoryName = params['categoryName'];
      });

    this.store.dispatch(loadRecipes())
  }
}
