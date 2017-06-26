import { Component, OnInit } from '@angular/core';

import { ICategory } from './category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'rg-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  private categories: ICategory[];
  private errorMessage: string;

  constructor(private _CategoriesService: CategoriesService) { }

  ngOnInit() {
    this._CategoriesService.getCategories()
        .subscribe(categories => this.categories = categories,
                  error => this.errorMessage = <any>error);
  }

}
