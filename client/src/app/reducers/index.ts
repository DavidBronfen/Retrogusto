import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromCategories from './categories';
import * as fromLogin from './login';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  categories: fromCategories.State;
  login: fromLogin.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  categories: fromCategories.reducer,
  login: fromLogin.reducer,
};


/**
* Layout Reducers
*/
export const getCategoriesState = createFeatureSelector<fromCategories.State>('categories');
export const getLoginState = createFeatureSelector<fromLogin.State>('login');

export const getLoginPopupState = createSelector(
  getLoginState,
  fromLogin.getShowPopupState,
);
