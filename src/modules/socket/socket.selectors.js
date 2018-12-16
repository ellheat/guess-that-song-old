import { createSelector } from 'reselect';


const selectSocketDomain = state => state.socket;

export const selectSocket = createSelector(
  selectSocketDomain, state => state.get('io')
);

export const selectJukeboxSocket = createSelector(
  selectSocketDomain, state => state.get('jukebox')
);

export const selectMultiSocket = createSelector(
  selectSocketDomain, state => state.get('multi')
);

export const selectSpeedSocket = createSelector(
  selectSocketDomain, state => state.get('speed')
);
