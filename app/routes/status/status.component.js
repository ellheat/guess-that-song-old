import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './status.messages';
import { Container, Title } from './status.styles';

export class Status extends PureComponent {
  static propTypes = {

  };

  render() {
    return (
      <Container>
        <Helmet title="Game Status" />

        <Title>
          <FormattedMessage {...messages.title} />
        </Title>

      </Container>
    );
  }
}
