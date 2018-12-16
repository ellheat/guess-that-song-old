import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import { Container, Link } from './box.styles';

export class Box extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  };

  get url() {
    const { disabled, url } = this.props;
    if (!disabled) {
      return url;
    }
    return '';
  }

  render() {
    const { title, color, disabled } = this.props;

    return (
      <Container color={color} disabled={disabled}>
        <Link to={this.url}>
          {title}
        </Link>
      </Container>
    );
  }
}
