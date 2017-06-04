import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: '' },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ ]
})

export class AppRoutingModule {}
