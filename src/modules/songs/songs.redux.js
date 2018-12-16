import { createActions, createReducer } from 'reduxsauce';
import { Record, fromJS } from 'immutable';

export const { Types: SongsTypes, Creators: SongsActions } = createActions({
  getSong: [''],
  getSongSuccess: ['data'],
}, { prefix: 'SONGS_' });

const SongsRecord = new Record({
  song: fromJS(),
});

export const INITIAL_STATE = new SongsRecord({});

const getSongSuccessHandler = (state = INITIAL_STATE, action) => state.set('song', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [SongsTypes.GET_SONG_SUCCESS]: getSongSuccessHandler,
});
