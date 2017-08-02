import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IRecipes } from '../models/recipes';

@Injectable()
export class RecipesService {

  private _recipesUrl = 'data/recipes.json';

  constructor(private _http: Http) { }

  getRecipes (): Observable<IRecipes[]> {
    return this._http.get(this._recipesUrl)
      .map((response: Response) => <IRecipes[]> response.json())
      .catch(this.handleError);
    }

 private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}
