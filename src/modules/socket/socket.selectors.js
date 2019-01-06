import { createSelector } from 'reselect';


const selectSocketDomain = state => state.socket;

export const selectJukeboxSocket = createSelector(
  selectSocketDomain, state => state.get('jukebox')
);

export const selectMultiplayerSocket = createSelector(
  selectSocketDomain, state => state.get('multiplayer')
);

export const selectSpeedSocket = createSelector(
  selectSocketDomain, state => state.get('speed')
);
