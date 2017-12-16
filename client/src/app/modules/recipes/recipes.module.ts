import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';

import { StarRatingModule } from 'angular-star-rating'

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers';

import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesService } from './services/recipes.service';

import { RecipesEffects } from './effects/recipes';

@NgModule({
  imports: [
    RecipesRoutingModule,
    CommonModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(RecipesEffects),
    StarRatingModule.forRoot(),
  ],
  declarations: [
    RecipesComponent,
    RecipeComponent
  ],
  providers: [ RecipesService ]
})
export class RecipesModule { }
