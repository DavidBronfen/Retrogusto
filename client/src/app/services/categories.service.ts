import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'

import { ICategoryResponse } from '../models/category';

@Injectable()
export class CategoriesService {

  readonly envBackend = environment.backend;

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<ICategoryResponse> {
    return this._http.get<ICategoryResponse>(`${this.envBackend}/categories/`)
  }
}
