import { createActions, createReducer } from 'reduxsauce';
import { Record } from 'immutable';

export const { Types: SocketTypes, Creators: SocketActions } = createActions({
  createSocket: ['data'],
}, { prefix: 'USERS_' });

const SocketRecord = new Record({
  io: null,
});

export const INITIAL_STATE = new SocketRecord({});

const createSocketHandler = (state = INITIAL_STATE, action) => state.set('io', action.data);

export const reducer = createReducer(INITIAL_STATE, {
  [SocketTypes.CREATE_SOCKET]: createSocketHandler,
});
