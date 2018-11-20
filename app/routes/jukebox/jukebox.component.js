import envConfig from 'env-config';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './jukebox.messages';
import { Container, Title } from './jukebox.styles';

export class Jukebox extends PureComponent {
  static propTypes = {
    initializeSocket: PropTypes.func.isRequired,
    destroySocket: PropTypes.func.isRequired,
    getPlaylist: PropTypes.func.isRequired,
    playlist: PropTypes.object,
  };

  componentDidMount() {
    this.props.initializeSocket(envConfig.socket.namespace.jukebox);
    this.props.getPlaylist();
    this.redirect();
  }

  componentWillUnmount() {
    this.props.destroySocket(envConfig.socket.namespace.jukebox);
  }

  redirect() {
    const scopes = 'user-read-private user-read-email';
    const redirectUri = 'http://localhost:3000/callback';
    const url = 'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + 'clientId' +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirectUri);

    window.location.href = url;
  }

  render() {
    const { playlist } = this.props;

    console.log(playlist);

    return (
      <Container>
        <Helmet title="Jukebox" />

        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
      </Container>
    );
  }
}
