import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { IRecipesResponse } from '../models/recipes';

@Injectable()
export class RecipesService {
  readonly envBackend = environment.backend;
  constructor(private _http: HttpClient) { }

  getRecipes (): Observable<IRecipesResponse> {
    return this._http.get<IRecipesResponse>(`${this.envBackend}/recipes/`)
  }
}
