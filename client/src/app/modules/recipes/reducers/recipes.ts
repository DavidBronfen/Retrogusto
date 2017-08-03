import { IRecipes } from '../models/recipes';
import * as recipes from '../actions/recipes';

export type State = IRecipes[];

const initialState: State = [{
  id: 3,
  title: '',
  image_path: '',
  rating: 4.5,
  description: '',
  prep_time: '',
  portions: 6,
  calories: 465
}];

export function reducer(state = initialState, action: recipes.Actions): State {
  switch (action.type) {
    case recipes.LOAD_RECIPES: {
      return initialState;
    }

    case recipes.LOAD_RECIPES_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}