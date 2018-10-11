import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './home.messages';
import { Container, Title } from './home.styles';
import { UsersList } from '../components/usersList/usersList.component';

export class Home extends PureComponent {
  static propTypes = {
    connectUser: PropTypes.func.isRequired,
    usersList: PropTypes.object,
  };

  componentDidMount() {
    this.props.connectUser();
  }

  render() {
    const { usersList } = this.props;

    return (
      <Container>
        <Helmet title="Homepage" />

        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <UsersList usersList={usersList} />
      </Container>
    );
  }
}
