import { createActions, createReducer } from 'reduxsauce';
import { Record, fromJS } from 'immutable';

export const { Types: JukeboxTypes, Creators: JukeboxActions } = createActions({
  getPlaylist: [],
  getPlaylistSuccess: ['data'],
}, { prefix: 'JUKEBOX_' });

const JukeboxRecord = new Record({
  playlist: fromJS(),
});

export const INITIAL_STATE = new JukeboxRecord({});

const getPlaylistSuccessHandler = (state = INITIAL_STATE, action) => state.set('playlist', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [JukeboxTypes.GET_PLAYLIST_SUCCESS]: getPlaylistSuccessHandler,
});
