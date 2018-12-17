import { combineReducers } from 'redux';
import { reducer as localesReducer, LocalesRecord } from './locales/locales.redux';
import { reducer as playerReducer } from './player/player.redux';
import { reducer as socketReducer } from './socket/socket.redux';
import { reducer as jukeboxReducer } from './jukebox/jukebox.redux';


export const records = [
  LocalesRecord,
];

export default function createReducer() {
  return combineReducers({
    locales: localesReducer,
    player: playerReducer,
    socket: socketReducer,
    jukebox: jukeboxReducer,
  });
}
