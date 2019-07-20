import { ICategoryResponse } from '../models/category';
import { CategoriesActionTypes, Actions } from '../actions/categories';

import { environment } from '../../environments/environment'

export type State = ICategoryResponse;

const initialState: State = {
  categories: [],
  _message: ''
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case CategoriesActionTypes.LOAD_CATEGORIES: {
      return initialState;
    }

    case CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS: {
      action.payload.categories.map(category =>
        Object.assign(category, { image_path: environment.backend + category.image_path })
      );
      return {...action.payload};
    }

    case CategoriesActionTypes.LOAD_CATEGORIES_FAILED: {
      console.log('LOAD_CATEGORIES_FAILED');
      break;
    }

    default: {
      return state;
    }
  }
}
