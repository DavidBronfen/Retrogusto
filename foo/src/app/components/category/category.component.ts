import { Component, OnInit, Input } from '@angular/core';

import { ICategory } from '../../models/category';

@Component({
  selector: 'rg-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  @Input()
  category: ICategory;

  constructor() { }

  ngOnInit() {
  }

}
