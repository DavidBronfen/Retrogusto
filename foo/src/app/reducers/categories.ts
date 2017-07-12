import { ICategory } from '../models/category';
import * as categories from '../actions/categories';

export type State = ICategory[];

const initialState: State = [{
  id: 0,
  name: '',
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

    default: {
      return state;
    }
  }
}
