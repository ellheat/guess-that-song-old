import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './home.messages';
import { Container, Title } from './home.styles';

export class Home extends PureComponent {
  static propTypes = {
    connectUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.connectUser();
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
