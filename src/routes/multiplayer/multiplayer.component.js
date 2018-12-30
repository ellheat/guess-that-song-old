import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './multiplayer.messages';
import { Container, Title } from './multiplayer.styles';

import { PlayerList } from '../../components/playerList/playerList.component';

export class Multiplayer extends PureComponent {
  static propTypes = {
    initializePusher: PropTypes.func.isRequired,
    destroyPusher: PropTypes.func.isRequired,
    connectPlayer: PropTypes.func.isRequired,
    playerList: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.initializePusher(process.env.REACT_APP_SOCKET_NAME_MULTIPLAYER);
    this.props.connectPlayer();
  }

  componentWillUnmount() {
    this.props.destroyPusher(process.env.REACT_APP_SOCKET_NAME_MULTIPLAYER);
  }

  render() {
    const { playerList } = this.props;

    return (
      <Container>
        <Helmet title="Multiplayer" />

        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <PlayerList list={playerList} />
      </Container>
    );
  }
}
