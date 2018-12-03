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
  }

  componentWillUnmount() {
    this.props.destroySocket(envConfig.socket.namespace.jukebox);
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
