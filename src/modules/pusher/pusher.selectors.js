import { createSelector } from 'reselect';


const selectSocketDomain = state => state.pusher;

export const selectJukebox = createSelector(
  selectSocketDomain, state => state.get('jukebox')
);

export const selectMultiplayer = createSelector(
  selectSocketDomain, state => {
    console.log('state', state);
    return state.get('multiplayer');
  }
);

export const selectSpeed = createSelector(
  selectSocketDomain, state => state.get('speed')
);
