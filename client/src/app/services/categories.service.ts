import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment'

import { ICategory } from '../models/category';

@Injectable()
export class CategoriesService {

  readonly envBackend = environment.backend;

  constructor(private _http: HttpClient) { }

  getCategories (): Observable<ICategory[]> {
      return this._http.get(`${this.envBackend}/api/categories/`)
        .map((response: HttpResponse<ICategory[]>) => response)
        .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error.message || 'server error');
  }
}
