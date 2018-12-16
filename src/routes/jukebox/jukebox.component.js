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
    this.props.initializeSocket(process.env.REACT_APP_SOCKET_NAME_JUKEBOX);
    this.props.getPlaylist();
  }

  componentWillUnmount() {
    this.props.destroySocket(process.env.REACT_APP_SOCKET_EVENT_DISCONNECT);
  }

  render() {
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
