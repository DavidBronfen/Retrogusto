import { ICategory } from '../models/category';
import * as categories from '../actions/categories';

export type State = ICategory[];

const initialState: State = [{
  id: 0,
  name_he: '',
  name_en: '',
  image_path: '',
}];

export function reducer(state = initialState, action: categories.Actions): State {
  switch (action.type) {
    case categories.LOAD_CATEGORIES: {
      return initialState;
    }

    case categories.LOAD_CATEGORIES_SUCCESS: {
      return action.payload;
    }

    case categories.LOAD_CATEGORIES_FAILED: {
      console.log('LOAD_CATEGORIES_FAILED');
      break;
    }

    default: {
      return state;
    }
  }
}
