import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './home.messages';
import { Container, Title } from './home.styles';

export class Home extends PureComponent {
  render() {
    return (
      <Container>
        <Helmet title="Homepage" />

        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <Link to="/jukebox"> Jukebox </Link>
        <Link to="/multi"> Multi </Link>
        <Link to="/speed"> Speed </Link>
      </Container>
    );
  }
}
