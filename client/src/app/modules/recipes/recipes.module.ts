import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RecipesRoutingModule,
    RecipesComponent,
    RecipeComponent
  ]
})
export class RecipesModule { }
