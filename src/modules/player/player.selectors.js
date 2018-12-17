import { createSelector } from 'reselect';


const selectPlayerDomain = state => state.player;

export const selectPlayer = createSelector(
  selectPlayerDomain, state => state.get('player')
);

export const selectPlayerList = createSelector(
  selectPlayerDomain, state => state.get('playerList')
);
