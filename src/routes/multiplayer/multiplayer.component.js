import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './multiplayer.messages';
import { Container, Title } from './multiplayer.styles';

export class Multiplayer extends PureComponent {
  render() {
    return (
      <Container>
        <Helmet title="Multiplayer" />

        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
      </Container>
    );
  }
}
