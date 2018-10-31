import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './jukebox.messages';
import { Container, Title } from './jukebox.styles';

export class Jukebox extends PureComponent {
  static propTypes = {
    getPlaylist: PropTypes.func.isRequired,
    playlist: PropTypes.object,
  };

  componentDidMount() {
    this.props.getPlaylist();
  }

  render() {
    const { playlist } = this.props;

    if (playlist) {
      console.log('playlist', playlist);
    }

    return (
      <Container>
        <Helmet title="Jukebox" />

        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
      </Container>
    );
  }
}
