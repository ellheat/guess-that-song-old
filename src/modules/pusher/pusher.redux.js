import { createActions, createReducer } from 'reduxsauce';
import { Record, Map, fromJS } from 'immutable';

export const { Types: PusherTypes, Creators: PusherActions } = createActions({
  initialize: ['namespace'],
  initializeSuccess: ['data'],
  destroy: ['namespace'],
  destroySuccess: ['namespace'],
}, { prefix: 'SOCKET_' });

const PusherRecord = new Record({
  jukebox: Map(),
  multiplayer: Map(),
  speed: Map(),
});

export const INITIAL_STATE = new PusherRecord({});

const initializeSuccessHandler = (state = INITIAL_STATE, action) =>
  state.set(action.data.namespace, fromJS(action.data.pusher));

const destroySuccessHandler = (state = INITIAL_STATE, action) => state.set(action.namespace, Map());

export const reducer = createReducer(INITIAL_STATE, {
  [PusherTypes.INITIALIZE_SUCCESS]: initializeSuccessHandler,
  [PusherTypes.DESTROY_SUCCESS]: destroySuccessHandler,
});
