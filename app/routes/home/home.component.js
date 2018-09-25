import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import envConfig from 'env-config';
import { FormattedMessage } from 'react-intl';
import io from 'socket.io-client';

import messages from './home.messages';
import { Container, Title } from './home.styles';

const SOCKET = io.connect(`${envConfig.url}:${envConfig.socketPort}`);

export class Home extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    SOCKET.emit('connection');
  }

  render() {
    return (
      <Container>
        <Helmet title="Homepage" />

        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
      </Container>
    );
  }
}
