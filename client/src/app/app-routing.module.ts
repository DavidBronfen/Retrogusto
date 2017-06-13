import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  { path: '**', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category', component: CategoryComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule ]
})

export class AppRoutingModule {}
