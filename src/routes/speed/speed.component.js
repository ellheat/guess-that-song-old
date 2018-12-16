import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './speed.messages';
import { Container, Title } from './speed.styles';

export class Speed extends PureComponent {
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
