import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './usersList.messages';
import { Container, Title, List, ListItem } from './usersList.styles';

export class UsersList extends PureComponent {
  static propTypes = {
    usersList: PropTypes.object,
  };

  render() {
    const { usersList } = this.props;

    return (
      <Container>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <List>
          {usersList.map(user => (
            <ListItem key={user.get('id')}>
              {user.get('name')}
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}
