import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment'

import { ICategory } from '../models/category';

@Injectable()
export class CategoriesService {

  readonly envBackend = environment.backend;

  constructor(private _http: HttpClient) { }

  getCategories (): Observable<ICategory[]> {
    return this._http.get<ICategory[]>(`${this.envBackend}/api/categories/`)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error.message || 'server error');
  }
}
