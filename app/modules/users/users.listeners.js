import envConfig from 'env-config';
import { eventChannel } from 'redux-saga';
import { UsersActions } from './users.redux';
import { socket } from '../../services/socket';

function addUser(emit) {
  socket.on(envConfig.socketEvents.addUser, (data) => {
    emit(UsersActions.connectUserSuccess(data));
  });
}

function getUsersList(emit) {
  socket.on(envConfig.socketEvents.usersLists, (data) => {
    emit(UsersActions.getUsersList(data));
  });
}

export function usersListeners() {
  return eventChannel(emit => {
    addUser(emit);
    getUsersList(emit);
    return () => {};
  });
}
