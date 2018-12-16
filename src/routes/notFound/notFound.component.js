import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import { compose } from 'ramda';

import messages from './notFound.messages';
import { Container, Heading, Button } from './notFound.styles';
import { ROUTES } from '../../constants';

export class NotFoundComponent extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  handleExploreClick = () => {
    this.props.history.push(ROUTES.home);
  };

  render() {
    return (
      <Container>
        <Helmet
          title={this.props.intl.formatMessage(messages.pageTitle)}
        />

        <Heading><FormattedMessage {...messages.title} /></Heading>

        <Button light onClick={this.handleExploreClick}>
          <FormattedMessage {...messages.button} />
        </Button>
      </Container>
    );
  }
}

export const NotFound = compose(
  injectIntl,
)(NotFoundComponent);
