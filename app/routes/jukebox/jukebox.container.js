import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { Jukebox } from './jukebox.component';
import { JukeboxActions } from '../../modules/jukebox/jukebox.redux';
import { selectPlaylist } from '../../modules/jukebox/jukebox.selectors';


const mapStateToProps = createStructuredSelector({
  playlist: selectPlaylist,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPlaylist: JukeboxActions.getPlaylist,
}, dispatch);

export default compose(
  hot(module),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Jukebox);
