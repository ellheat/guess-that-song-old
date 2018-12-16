import { createSelector } from 'reselect';


const selectJukeboxDomain = state => state.jukebox;

export const selectPlaylist = createSelector(
  selectJukeboxDomain, state => state.get('playlist')
);
