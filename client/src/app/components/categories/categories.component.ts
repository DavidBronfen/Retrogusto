import { Component, OnInit } from '@angular/core';

import { ICategory } from './category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'rg-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: ICategory[];

  constructor(private _CategoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories = this._CategoriesService.getCategories();
  }

}
