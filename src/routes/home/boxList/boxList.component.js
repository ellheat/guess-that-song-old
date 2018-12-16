import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import { List } from './boxList.styles';
import { Box } from './box/box.component';

export class BoxList extends PureComponent {
  static propTypes = {
    list: PropTypes.array.isRequired,
  };

  render() {
    const { list } = this.props;

    return (
      <List>
        {list.map((box, index) => (
          <Box title={box.title} color={box.color} url={box.url} disabled={box.disabled} key={index} />
        ))}
      </List>
    );
  }
}
