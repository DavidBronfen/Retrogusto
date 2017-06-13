import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {path: '', component: RecipesComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RecipesRoutingModule {}
