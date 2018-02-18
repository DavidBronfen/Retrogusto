import { ILoginToken } from '../models/login'
import { Actions, LoginActionTypes } from '../actions/login';

export type State = ILoginToken;

const initialState: State = {
  token: '',
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case LoginActionTypes.LOGIN: {
      return initialState;
    }

    case LoginActionTypes.LOGIN_SUCCESS: {
      return action.payload;
    }

    case LoginActionTypes.LOGIN_FAILED: {
      console.log('LOGIN_FAILED');
    }

    default: {
      return state;
    }
  }
}
