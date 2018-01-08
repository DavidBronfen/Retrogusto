import { ILogin } from '../models/login'
import * as login from '../actions/login';

export type State = ILogin;

const initialState: State = {
  showPopup: false,
};

export function reducer(state = initialState, action: login.Actions): State {
  switch (action.type) {
    case login.TOGGLE_LOGIN_POPUP: {
      return {
        ...state,
        showPopup: !state.showPopup,
      }
    }

    default: {
      return state;
    }
  }
}

export const getShowPopupState = (state: State) => state.showPopup;
