import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { Home } from './home.component';
import { UsersActions } from '../../modules/users/users.redux';
import { selectUsersList } from '../../modules/users/users.selectors';


const mapStateToProps = createStructuredSelector({
  usersList: selectUsersList,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  connectUser: UsersActions.connectUser,
}, dispatch);

export default compose(
  hot(module),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Home);
