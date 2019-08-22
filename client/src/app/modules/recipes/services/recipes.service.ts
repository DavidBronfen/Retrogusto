import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IRecipesResponse } from '../models/recipes';

@Injectable()
export class RecipesService {
  constructor(private _http: HttpClient) { }

  getRecipes (): Observable<IRecipesResponse> {
    return this._http.get<IRecipesResponse>('/api/recipes/');
  }
}
