import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import classnames from 'classnames/bind';

import namedRoutes from '../../../routes';

import AuthWrapper from '../AuthWrapper';
import AppWrapper from '../AppWrapper';

import s from './styles.css';

const cx = classnames.bind(s);

class App extends Component {
  render() {
    return (
      <div className={cx(s.app, 'pt-dark')}>
        <Route path={namedRoutes.app} component={AppWrapper}/>
        <Route path={namedRoutes.auth} component={AuthWrapper}/>
        <Redirect from={namedRoutes.base} to={namedRoutes.wallets}/>
      </div>
    );
  }
}

const ConnectedComponent = connect(null)(App);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
