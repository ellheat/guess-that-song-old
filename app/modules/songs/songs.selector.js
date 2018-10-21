import { createSelector } from 'reselect';


const selectSongsDomain = state => state.get('songs');

export const selectSong = createSelector(
  selectSongsDomain, state => state.get('song')
);
