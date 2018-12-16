import { combineReducers } from 'redux';
import { reducer as localesReducer, LocalesRecord } from './locales/locales.redux';
import { reducer as usersReducer } from './users/users.redux';
import { reducer as socketReducer } from './socket/socket.redux';
import { reducer as songsReducer } from './songs/songs.redux';
import { reducer as jukeboxReducer } from './jukebox/jukebox.redux';


export const records = [
  LocalesRecord,
];

export default function createReducer() {
  return combineReducers({
    locales: localesReducer,
    users: usersReducer,
    socket: socketReducer,
    songs: songsReducer,
    jukebox: jukeboxReducer,
  });
}
