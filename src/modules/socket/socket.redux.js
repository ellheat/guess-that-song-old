import { createActions, createReducer } from 'reduxsauce';
import { Record, Map, fromJS } from 'immutable';

export const { Types: SocketTypes, Creators: SocketActions } = createActions({
  initialize: ['namespace'],
  initializeSuccess: ['data'],
  destroy: ['namespace'],
  destroySuccess: ['namespace'],
}, { prefix: 'SOCKET_' });

const SocketRecord = new Record({
  jukebox: Map(),
  multiplayer: Map(),
  speed: Map(),
});

export const INITIAL_STATE = new SocketRecord({});

const initializeSuccessHandler = (state = INITIAL_STATE, action) => {
  return state.set(action.data.nsp.replace('/', ''), fromJS(action.data));
};


const destroySuccessHandler = (state = INITIAL_STATE, action) => state.set(action.namespace.replace('/', ''), Map());

export const reducer = createReducer(INITIAL_STATE, {
  [SocketTypes.INITIALIZE_SUCCESS]: initializeSuccessHandler,
  [SocketTypes.DESTROY_SUCCESS]: destroySuccessHandler,
});
