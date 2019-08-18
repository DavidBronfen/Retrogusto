import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICategoryResponse } from '../models/category';

@Injectable()
export class CategoriesService {
  constructor(private _http: HttpClient) { }

  getCategories(): Observable<ICategoryResponse> {
    return this._http.get<ICategoryResponse>('/api/categories/');
  }
}
