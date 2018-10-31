import { createActions, createReducer } from 'reduxsauce';
import { Record } from 'immutable';

export const { Types: SocketTypes, Creators: SocketActions } = createActions({
  initialize: [],
  initializeSuccess: ['data'],
}, { prefix: 'SOCKET_' });

const SocketRecord = new Record({
  io: null,
});

export const INITIAL_STATE = new SocketRecord({});

const initializeSuccessHandler = (state = INITIAL_STATE, action) => state.set('io', action.data);

export const reducer = createReducer(INITIAL_STATE, {
  [SocketTypes.INITIALIZE_SUCCESS]: initializeSuccessHandler,
});
