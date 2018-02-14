import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatGridListModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
} from '@angular/material';

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
import { LoginComponent } from './components/login/login.component';
import { RgLogoComponent } from './components/rgLogo/rgLogo.component';

import { CategoriesService } from './services/categories.service';

import { CategoriesEffects } from './effects/categories';

import { environment } from '../environments/environment';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CategoriesComponent,
    CategoryComponent,
    LoginComponent,
    RgLogoComponent,
  ],
  entryComponents: [LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      CategoriesEffects,
    ]),
    FlexLayoutModule,
  ],
  providers: [
    CategoriesService,
    LoginService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
