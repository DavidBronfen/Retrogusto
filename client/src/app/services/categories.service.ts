import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ICategory } from '../models/category';

@Injectable()
export class CategoriesService {

  private _categoriesUrl = 'data/categories.json';

  constructor(private _http: Http) { }

  getCategories (): Observable<ICategory[]> {
      return this._http.get(this._categoriesUrl)
        .map((response: Response) => <ICategory[]> response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}
