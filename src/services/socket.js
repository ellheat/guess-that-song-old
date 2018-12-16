import io from 'socket.io-client';


export default class Socket {
  socket = null;

  initialize(namespace) {
    this.socket = io(`${process.env.REACT_APP_SOCKET_URL}:${process.env.REACT_APP_SOCKET_PORT}`);
    this.socket.nsp = namespace;
  }

  destroy() {
    this.socket.destroy();
  }

  get io() {
    return this.socket;
  }
}
