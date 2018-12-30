import PusherJS from 'pusher-js';


export default class Pusher {
  pusherJS = null;

  initialize(namespace) {
    this.pusherJS = new PusherJS(process.env.REACT_APP_PUSHER_KEY, {
      cluster: 'eu',
      forceTLS: true,
    });
    this.pusherJS.subscribe(namespace);
  }

  destroy() {
    this.pusherJS.destroy();
  }

  get pusher() {
    return this.pusherJS;
  }
}
