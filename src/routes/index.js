import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../constants';
import App from './app.container';
import { Home } from './home';
import { Jukebox } from './jukebox';
import { Multiplayer } from './multiplayer';
import { Speed } from './speed';
import { NotFound } from './notFound';


export class RootContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <App location={this.props.location}>
        <Switch>
          <Route exact path={ROUTES.home} component={Home} />
          <Route path={ROUTES.jukebox} component={Jukebox} /> />
          <Route exact path={ROUTES.multiplayer} component={Multiplayer} />
          <Route path={ROUTES.speed} component={Speed} /> />
          <Route component={NotFound} />
        </Switch>
      </App>
    );
  }
}

export default withRouter(RootContainer);
