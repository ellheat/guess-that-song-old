import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './playerList.messages';
import { Container, Title, List, Item } from './playerList.styles';

export class PlayerList extends PureComponent {
  static propTypes = {
    list: PropTypes.object,
  };

  render() {
    const { list } = this.props;

    return (
      <Container>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>

        <List>
          {list.map((player, index) => (
            <Item key={index}> {player.get('name')} </Item>
          ))}
        </List>

      </Container>
    );
  }
}
