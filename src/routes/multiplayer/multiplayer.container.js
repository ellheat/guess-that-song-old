import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { Multiplayer } from './multiplayer.component';


const mapStateToProps = createStructuredSelector({

});

export const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default compose(
  hot(module),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Multiplayer);
