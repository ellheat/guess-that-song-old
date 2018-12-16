import { eventChannel } from 'redux-saga';
import { UsersActions } from './users.redux';

function addUser(emit, socket) {
  socket.io.on(process.env.REACT_APP_SOCKET_EVENT_ADD_USER, (data) => {
    emit(UsersActions.connectUserSuccess(data));
  });
}

function getUsersList(emit, socket) {
  socket.io.on(process.env.REACT_APP_SOCKET_EVENT_USERS_LIST, (data) => {
    emit(UsersActions.getUsersList(data));
  });
}

export function usersListeners(socket) {
  return eventChannel(emit => {
    addUser(emit, socket);
    getUsersList(emit, socket);
    return () => {};
  });
}
