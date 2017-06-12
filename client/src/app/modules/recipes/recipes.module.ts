import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RecipesComponent,
    RecipeComponent
  ]
})
export class RecipesModule { }
