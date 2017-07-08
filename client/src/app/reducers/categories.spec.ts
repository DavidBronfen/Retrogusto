import { reducer } from './index';

describe('reducers', () => {
  it('Should handle Load Categories action', () => {
    let state;
    state = reducer({
      categories: [{
        id: 0,
        name_he: '',
        image_path: ''
      }]
    }, {
      type: '[Categories] Load Categories'
    });
    expect(state).toEqual({
      categories: [{
        id: 0,
        name_he: '',
        image_path: ''
      }]
    });
  });

  it('Should handle Load Categories Success action', () => {
    let state;
    state = reducer({
       categories: [
          {
             id: 0,
             name_he: '',
             name_en: '',
             image_path: ''
          }
       ]
    },
    {
       payload: [
          {
             id: 1,
             name_he: 'ארוחת בוקר',
             name_en: 'breakfast',
             image_path: 'data/categories/breakfast.png'
          },
          {
             id: 2,
             name_he: 'סלטים',
             name_en: 'salads',
             image_path: 'data/categories/salad.png'
          },
          {
             id: 3,
             name_he: 'מתאבנים',
             name_en: 'appetizers',
             image_path: 'data/categories/appetizer.png'
          },
          {
             id: 4,
             name_he: 'משקאות',
             name_en: 'beverages',
             image_path: 'data/categories/beverage.png'
          },
          {
             id: 5,
             name_he: 'אורז',
             name_en: 'rices',
             image_path: 'data/categories/rice.png'
          },
          {
             id: 6,
             name_he: 'פסטה',
             name_en: 'pasta',
             image_path: 'data/categories/pasta.png'
          },
          {
             id: 7,
             name_he: 'דגים ופירות ים',
             name_en: 'fish and seafood',
             image_path: 'data/categories/fish.png'
          },
          {
             id: 8,
             name_he: 'מרקים',
             name_en: 'soup',
             image_path: 'data/categories/soup.png'
          },
          {
             id: 9,
             name_he: 'בשר',
             name_en: 'meat',
             image_path: 'data/categories/meat.png'
          },
          {
             id: 10,
             name_he: 'עוף',
             name_en: 'chicken',
             image_path: 'data/categories/chicken.png'
          },
          {
             id: 11,
             name_he: 'צמחוני',
             name_en: 'vegetarian',
             image_path: 'data/categories/vegetarian.png'
          },
          {
             id: 12,
             name_he: 'טבעוני',
             name_en: 'vegan',
             image_path: 'data/categories/vegan.png'
          },
          {
             id: 13,
             name_he: 'בריאות ודיאטה',
             name_en: 'health and diet',
             image_path: 'data/categories/health.png'
          },
          {
             id: 14,
             name_he: 'לחמים',
             name_en: 'bread',
             image_path: 'data/categories/bread.png'
          },
          {
             id: 15,
             name_he: 'עוגות',
             name_en: 'cakes',
             image_path: 'data/categories/cake.png'
          },
          {
             id: 16,
             name_he: 'קינוחים',
             name_en: 'desserts',
             image_path: 'data/categories/dessert.png'
          }
       ],
       type: '[Categories] Load Categories Success'
    });
    expect(state).toEqual({
     categories: [
       {
          id: 1,
          name_he: 'ארוחת בוקר',
          name_en: 'breakfast',
          image_path: 'data/categories/breakfast.png'
       },
       {
          id: 2,
          name_he: 'סלטים',
          name_en: 'salads',
          image_path: 'data/categories/salad.png'
       },
       {
          id: 3,
          name_he: 'מתאבנים',
          name_en: 'appetizers',
          image_path: 'data/categories/appetizer.png'
       },
       {
          id: 4,
          name_he: 'משקאות',
          name_en: 'beverages',
          image_path: 'data/categories/beverage.png'
       },
       {
          id: 5,
          name_he: 'אורז',
          name_en: 'rices',
          image_path: 'data/categories/rice.png'
       },
       {
          id: 6,
          name_he: 'פסטה',
          name_en: 'pasta',
          image_path: 'data/categories/pasta.png'
       },
       {
          id: 7,
          name_he: 'דגים ופירות ים',
          name_en: 'fish and seafood',
          image_path: 'data/categories/fish.png'
       },
       {
          id: 8,
          name_he: 'מרקים',
          name_en: 'soup',
          image_path: 'data/categories/soup.png'
       },
       {
          id: 9,
          name_he: 'בשר',
          name_en: 'meat',
          image_path: 'data/categories/meat.png'
       },
       {
          id: 10,
          name_he: 'עוף',
          name_en: 'chicken',
          image_path: 'data/categories/chicken.png'
       },
       {
          id: 11,
          name_he: 'צמחוני',
          name_en: 'vegetarian',
          image_path: 'data/categories/vegetarian.png'
       },
       {
          id: 12,
          name_he: 'טבעוני',
          name_en: 'vegan',
          image_path: 'data/categories/vegan.png'
       },
       {
          id: 13,
          name_he: 'בריאות ודיאטה',
          name_en: 'health and diet',
          image_path: 'data/categories/health.png'
       },
       {
          id: 14,
          name_he: 'לחמים',
          name_en: 'bread',
          image_path: 'data/categories/bread.png'
       },
       {
          id: 15,
          name_he: 'עוגות',
          name_en: 'cakes',
          image_path: 'data/categories/cake.png'
       },
       {
          id: 16,
          name_he: 'קינוחים',
          name_en: 'desserts',
          image_path: 'data/categories/dessert.png'
       }
     ]
   });
  });
});
