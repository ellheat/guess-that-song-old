import { createSelector } from 'reselect';


const selectUsersDomain = state => state.get('users');

export const selectUser = createSelector(
  selectUsersDomain, state => state.get('user')
);

export const selectUsersList = createSelector(
  selectUsersDomain, state => state.get('usersList')
);
