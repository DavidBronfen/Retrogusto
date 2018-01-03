import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../../../../environments/environment'
import { IRecipes } from '../../models/recipes';

@Component({
  selector: 'rg-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: IRecipes;

  envBackend = environment.backend;

  constructor() { }

  ngOnInit() {
  }

}
