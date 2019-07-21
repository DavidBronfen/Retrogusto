import { IRecipesResponse } from '../models/recipes';
import { RecipesActionTypes, Actions } from '../actions/recipes';
import { environment } from '../../../../environments/environment';

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
      action.payload.recipes.map(recipe =>
        Object.assign(recipe, { image_path: environment.backend + recipe.image_path })
      );
      return {...action.payload};
    }

    default: {
      return state;
    }
  }
}
