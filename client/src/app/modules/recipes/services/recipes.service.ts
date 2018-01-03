import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';

import { IRecipes } from '../models/recipes';

@Injectable()
export class RecipesService {

  readonly _recipesUrl = 'data/recipes.json';

  constructor(private _http: HttpClient) { }

  getRecipes (): Observable<IRecipes[]> {
    return this._http.get(this._recipesUrl)
      .map((response: HttpResponse<IRecipes[]>) => response)
      .catch(this.handleError);
    }

 private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error.message || 'server error');
  }
}
