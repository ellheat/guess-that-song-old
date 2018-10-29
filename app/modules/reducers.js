import { combineReducers } from 'redux-immutable';

import { reducer as routerReducer } from './router/router.redux';
import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as usersReducer } from './users/users.redux';
import { reducer as socketReducer } from './socket/socket.redux';
import { reducer as songsReducer } from './songs/songs.redux';
import { reducer as jukeboxReducer } from './jukebox/jukebox.redux';
//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    users: usersReducer,
    locales: localesReducer,
    socket: socketReducer,
    songs: songsReducer,
    jukebox: jukeboxReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}
