import { Component, OnInit } from '@angular/core';

import { ICategory } from './category'

@Component({
  selector: 'rg-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[];

  constructor() { }

  ngOnInit() {
  }

}
