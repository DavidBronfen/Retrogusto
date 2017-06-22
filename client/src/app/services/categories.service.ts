import { Injectable } from '@angular/core';

import { ICategory } from '../components/categories/category';

@Injectable()
export class CategoriesService {

  constructor() { }

  getCategories (): ICategory[] {
      return[
        {
          'id': 1,
          'name': 'ארוחת בוקר',
          'image_path': 'data/categories/breakfast.png'
        },
        {
        	'id':  2,
          'name': 'סלטים',
          'image_path': 'data/categories/salad.png'
        },
        {
        	'id': 3,
          'name': 'מתאבנים',
          'image_path': 'data/categories/appetizer.png'
        }
      ]
  }
}
