import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import classnames from 'classnames/bind';

import namedRoutes from '../../../routes';

import AuthWrapper from '../AuthWrapper';
import AppWrapper from '../AppWrapper';
import Error404 from '../../../components/common/Error404';

import s from './styles.css';

const cx = classnames.bind(s);

class App extends Component {
  render() {
    const e404 = () => (
      <div className={s.e404}><Error404/></div>
    );

    return (
      <div className={cx(s.app, 'pt-dark')}>
        <Switch>
          <Route path={namedRoutes.app} component={AppWrapper}/>
          <Route path={namedRoutes.auth} component={AuthWrapper}/>
          <Route component={e404}/>
        </Switch>
      </div>
    );
  }
}

const ConnectedComponent = connect(null)(App);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
