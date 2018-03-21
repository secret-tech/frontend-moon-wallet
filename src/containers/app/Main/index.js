import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import classnames from 'classnames/bind';

import AuthWrapper from '../AuthWrapper';
import AppWrapper from '../AppWrapper';

import s from './styles.css';

const cx = classnames.bind(s);

class Main extends Component {
  render() {
    return (
      <div className={cx(s.app, 'pt-dark')}>
        <Switch>
          <Route path="/auth" component={AuthWrapper}/>
          <Route component={AppWrapper}/>
        </Switch>
      </div>
    );
  }
}

const ConnectedComponent = connect(null)(Main);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
