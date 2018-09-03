import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './panel.messages';
import { Container, Title } from './panel.styles';

export class Panel extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <Container>
        <Helmet title="Admin panel" />

        <Title>
          <FormattedMessage {...messages.title} />
        </Title>

      </Container>
    );
  }
}
