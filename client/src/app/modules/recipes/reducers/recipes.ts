import { IRecipesResponse } from '../models/recipes';
import { RecipesActionTypes, Actions } from '../actions/recipes';

export type State = IRecipesResponse;

const initialState: State = {
  recipes: [],
  _message: ''
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case RecipesActionTypes.LOAD_RECIPES: {
      return initialState;
    }

    case RecipesActionTypes.LOAD_RECIPES_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
