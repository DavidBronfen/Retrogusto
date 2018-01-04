import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { environment } from '../../../../environments/environment';

import { IRecipes } from '../models/recipes';

@Injectable()
export class RecipesService {

  readonly envBackend = environment.backend;

  constructor(private _http: HttpClient) { }

  getRecipes (): Observable<IRecipes[]> {
    return this._http.get<IRecipes[]>(`${this.envBackend}/api/recipes/`)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error.message || 'server error');
  }
}
