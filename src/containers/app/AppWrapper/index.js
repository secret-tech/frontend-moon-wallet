import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { namedRoutes } from '../../../routes';

import Nav from '../../../components/app/Nav';
import Dashboard from '../../../components/app/Dashboard';
import Settings from '../../../components/app/Settings';

class AppWrapper extends Component {
  render() {
    return (
      <div className="app">
        <Nav/>
        <Switch>
          <Route exact path={namedRoutes.dashboard} component={Dashboard}/>
          <Route exact path={namedRoutes.settings} component={Settings}/>
          <Redirect from={namedRoutes.app} to={namedRoutes.dashboard}/>
        </Switch>
      </div>
    );
  }
}

const ConnectedComponent = connect(null)(AppWrapper);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
