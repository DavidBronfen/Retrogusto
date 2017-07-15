import { Component, OnInit, Input } from '@angular/core';

import { IRecipes } from '../../../../models/recipes';

@Component({
  selector: 'rg-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: IRecipes;

  constructor() { }

  ngOnInit() {
    console.log(this.recipe.image_path);
  }

}
