import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './rg.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesService } from './services/categories.service';

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
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ CategoriesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
