
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';



import { environment } from '../../environments/environment'

import { ICategory } from '../models/category';

@Injectable()
export class CategoriesService {

  readonly envBackend = environment.backend;

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this._http.get<ICategory[]>(`${this.envBackend}/api/categories/`)
      .map(categorioes =>
         categorioes.map(category =>
           Object.assign(category, { image_path: environment.backend + category.image_path })
         )
       )
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return observableThrowError(err.error.message || 'server error');
  }
}
