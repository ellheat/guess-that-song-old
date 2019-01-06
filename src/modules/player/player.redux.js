import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: PlayerTypes, Creators: PlayerActions } = createActions({
  connect: ['namespace'],
  connectSuccess: ['data'],
  getListSuccess: ['data'],
}, { prefix: 'PLAYER_' });

const PlayerRecord = new Record({
  player: fromJS(),
  playerList: List(),
});

export const INITIAL_STATE = new PlayerRecord({});

const connectSuccessHandler = (state = INITIAL_STATE, action) => state.set('player', fromJS(action.data));

const getListSuccessHandler = (state = INITIAL_STATE, action) => state.set('playerList', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [PlayerTypes.CONNECT_SUCCESS]: connectSuccessHandler,
  [PlayerTypes.GET_LIST_SUCCESS]: getListSuccessHandler,
});
