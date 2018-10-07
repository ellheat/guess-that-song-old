import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: UsersTypes, Creators: UsersActions } = createActions({
  connectUser: [''],
  connectUserSuccess: ['data'],
  disconnectUser: ['data'],
  getUsersList: ['data'],
}, { prefix: 'USERS_' });

const UsersRecord = new Record({
  user: fromJS(),
  usersList: List(),
});

export const INITIAL_STATE = new UsersRecord({});

const connectUserSuccessHandler = (state = INITIAL_STATE, action) => state.set('user', fromJS(action.data));

const getUsersListHandler = (state = INITIAL_STATE, action) => state.set('usersList', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [UsersTypes.CONNECT_USER_SUCCESS]: connectUserSuccessHandler,
  [UsersTypes.GET_USERS_LIST]: getUsersListHandler,
});
