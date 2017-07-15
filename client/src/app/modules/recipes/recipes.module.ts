import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesService } from '../../services/recipes.service';

@NgModule({
  imports: [
    RecipesRoutingModule,
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    RecipesComponent,
    RecipeComponent
  ],
  providers: [ RecipesService ]
})
export class RecipesModule { }
