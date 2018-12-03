export default class Spotify {
  login() {
    const scopes = 'user-read-private user-read-email';
    const redirectUri = 'http://localhost:3000/jukebox';
    const url = 'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + '759d9b4867f64fd2a3e0f5ee04202c88' +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirectUri);

    window.location.href = url;
  }

  get accessToken() {
    return this.socket;
  }
}
