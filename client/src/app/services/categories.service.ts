import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ICategory } from '../models/category';

@Injectable()
export class CategoriesService {

  readonly _categoriesUrl = 'data/categories.json';

  constructor(private _http: HttpClient) { }

  getCategories (): Observable<ICategory[]> {
      return this._http.get(this._categoriesUrl)
        .map((response: HttpResponse<ICategory[]>) => response)
        .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error.message || 'server error');
  }
}
