import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { Multiplayer } from './multiplayer.component';

import { PlayerActions } from '../../modules/player/player.redux';
import { selectPlayerList } from '../../modules/player/player.selectors';
import { PusherActions } from '../../modules/pusher/pusher.redux';


const mapStateToProps = createStructuredSelector({
  playerList: selectPlayerList,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  initializePusher: PusherActions.initialize,
  destroyPusher: PusherActions.destroy,
  connectPlayer: PlayerActions.connect,
}, dispatch);

export default compose(
  hot(module),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Multiplayer);
