import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IRecipes } from '../../models/recipes';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'rg-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  // This is an infrastructure that will serve us in the future when the request
  // will be made from an actual server,
  // in order to bring the recipes by the category name.
  private categoryName: String;
  public recipes: IRecipes[];
  private errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _RecipesService: RecipesService
  ) {}

  ngOnInit() {
    // This is an infrastructure that will serve us in the future when the request
    // will be made from an actual server,
    // in order to bring the recipes by the category name.
    this.activatedRoute.params.subscribe((params: Params) => {
        this.categoryName = params['categoryName'];
      });

    this._RecipesService.getRecipes ()
      .subscribe(recipes => this.recipes = recipes,
                error => this.errorMessage = <any>error);
  }
}
