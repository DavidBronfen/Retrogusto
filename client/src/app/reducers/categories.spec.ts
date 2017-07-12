import { reducer } from './index';

describe('reducers', () => {
  it('Should handle Load Categories action', () => {
    let state;
    state = reducer({
      categories: [{
        id: 0,
        name: '',
        image_path: ''
      }]
    }, {
      type: '[Categories] Load Categories'
    });
    expect(state).toEqual({
      categories: [{
        id: 0,
        name: '',
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
             name: '',
             image_path: ''
          }
       ]
    },
    {
       payload: [
          {
             id: 1,
             name: 'ארוחת בוקר',
             image_path: 'data/categories/breakfast.png'
          },
          {
             id: 2,
             name: 'סלטים',
             image_path: 'data/categories/salad.png'
          },
          {
             id: 3,
             name: 'מתאבנים',
             image_path: 'data/categories/appetizer.png'
          },
          {
             id: 4,
             name: 'משקאות',
             image_path: 'data/categories/beverage.png'
          },
          {
             id: 5,
             name: 'אורז',
             image_path: 'data/categories/rice.png'
          },
          {
             id: 6,
             name: 'פסטה',
             image_path: 'data/categories/pasta.png'
          },
          {
             id: 7,
             name: 'דגים ופירות ים',
             image_path: 'data/categories/fish.png'
          },
          {
             id: 8,
             name: 'מרקים',
             image_path: 'data/categories/soup.png'
          },
          {
             id: 9,
             name: 'בשר',
             image_path: 'data/categories/meat.png'
          },
          {
             id: 10,
             name: 'עוף',
             image_path: 'data/categories/chicken.png'
          },
          {
             id: 11,
             name: 'צמחוני',
             image_path: 'data/categories/vegetarian.png'
          },
          {
             id: 12,
             name: 'טבעוני',
             image_path: 'data/categories/vegan.png'
          },
          {
             id: 13,
             name: 'בריאות ודיאטה',
             image_path: 'data/categories/health.png'
          },
          {
             id: 14,
             name: 'לחמים',
             image_path: 'data/categories/bread.png'
          },
          {
             id: 15,
             name: 'עוגות',
             image_path: 'data/categories/cake.png'
          },
          {
             id: 16,
             name: 'קינוחים',
             image_path: 'data/categories/dessert.png'
          }
       ],
       type: '[Categories] Load Categories Success'
    });
    expect(state).toEqual({
     categories: [
        {
           id: 1,
           name: 'ארוחת בוקר',
           image_path: 'data/categories/breakfast.png'
        },
        {
           id: 2,
           name: 'סלטים',
           image_path: 'data/categories/salad.png'
        },
        {
           id: 3,
           name: 'מתאבנים',
           image_path: 'data/categories/appetizer.png'
        },
        {
           id: 4,
           name: 'משקאות',
           image_path: 'data/categories/beverage.png'
        },
        {
           id: 5,
           name: 'אורז',
           image_path: 'data/categories/rice.png'
        },
        {
           id: 6,
           name: 'פסטה',
           image_path: 'data/categories/pasta.png'
        },
        {
           id: 7,
           name: 'דגים ופירות ים',
           image_path: 'data/categories/fish.png'
        },
        {
           id: 8,
           name: 'מרקים',
           image_path: 'data/categories/soup.png'
        },
        {
           id: 9,
           name: 'בשר',
           image_path: 'data/categories/meat.png'
        },
        {
           id: 10,
           name: 'עוף',
           image_path: 'data/categories/chicken.png'
        },
        {
           id: 11,
           name: 'צמחוני',
           image_path: 'data/categories/vegetarian.png'
        },
        {
           id: 12,
           name: 'טבעוני',
           image_path: 'data/categories/vegan.png'
        },
        {
           id: 13,
           name: 'בריאות ודיאטה',
           image_path: 'data/categories/health.png'
        },
        {
           id: 14,
           name: 'לחמים',
           image_path: 'data/categories/bread.png'
        },
        {
           id: 15,
           name: 'עוגות',
           image_path: 'data/categories/cake.png'
        },
        {
           id: 16,
           name: 'קינוחים',
           image_path: 'data/categories/dessert.png'
        }
     ]
   });
  });
});
