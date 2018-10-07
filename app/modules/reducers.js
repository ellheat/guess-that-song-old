import { combineReducers } from 'redux-immutable';

import { reducer as routerReducer } from './router/router.redux';
import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as usersReducer } from './users/users.redux';
//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    users: usersReducer,
    locales: localesReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}
