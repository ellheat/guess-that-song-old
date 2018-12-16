import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { ROUTES } from '../../constants';
import { colors } from '../../theme/styled';

import messages from './home.messages';
import { Container, Title } from './home.styles';
import { BoxList } from './boxList/boxList.component';

const BOXES = [
  {
    title: 'Jukebox',
    color: colors.blue,
    url: ROUTES.jukebox,
    disabled: true,
  },
  {
    title: 'Multiplayer',
    color: colors.green,
    url: ROUTES.multiplayer,
  },
  {
    title: 'Speed',
    color: colors.yellow,
    url: ROUTES.speed,
    disabled: true,
  },
];

export class Home extends PureComponent {
  render() {
    return (
      <Container>
        <Helmet title="Homepage" />

        <Title>
          <FormattedMessage {...messages.title} />
        </Title>

        <BoxList list={BOXES} />
      </Container>
    );
  }
}
