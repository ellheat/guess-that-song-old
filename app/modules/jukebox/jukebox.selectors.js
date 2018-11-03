import { createSelector } from 'reselect';


const selectJukeboxDomain = state => state.get('jukebox');

export const selectPlaylist = createSelector(
  selectJukeboxDomain, state => state.get('playlist')
);
