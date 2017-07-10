import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ICategory } from '../../models/category';

@Component({
  selector: 'rg-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  @Input()
  category: ICategory;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToRecipes(givenCategory: string): any {
    let category: string = givenCategory.replace(/\s+/g, '-').toLowerCase()
    this.router.navigate(['recipes', category]);
  }

}
