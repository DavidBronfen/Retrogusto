import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './rg.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';

import { CategoriesService } from './services/categories.service';

import { CategoriesEffects } from './effects/categories';

import { environment } from '../environments/environment';

const Reducer = StoreModule.forRoot(reducers, {
    runtimeChecks: {
      strictStateImmutability: false,
      strictActionImmutability: false,
      strictStateSerializability: true,
      strictActionSerializability: true,
    },
  });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CategoriesComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    AppRoutingModule,
    Reducer,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      CategoriesEffects,
    ]),
    FlexLayoutModule,
  ],
  providers: [ CategoriesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
