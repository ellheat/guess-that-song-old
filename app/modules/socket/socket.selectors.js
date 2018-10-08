import { createSelector } from 'reselect';


const selectSocketDomain = state => state.get('socket');

export const selectSocket = createSelector(
  selectSocketDomain, state => state.get('io')
);
