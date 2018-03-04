import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import classnames from 'classnames/bind';

import namedRoutes from '../../../routes';

import Nav from '../../../components/app/Nav';
import Wallets from '../../../components/wallets/Wallets';
import Wallet from '../../../components/wallet/Wallet';
import Settings from '../../../components/app/Settings';
import Help from '../../../components/help/Help';

import s from './styles.css';

const cx = classnames.bind(s);

class App extends Component {
  render() {
    return (
      <div className={cx(s.app, 'pt-dark')}>
        <div className={s.nav}><Nav/></div>
        <Switch>
          <Route exact path={namedRoutes.wallets} component={Wallets}/>
          <Route exact path={`${namedRoutes.wallet}/:walletId`} component={Wallet}/>
          <Route exact path={namedRoutes.settings} component={Settings}/>
          <Route exact path={namedRoutes.help} component={Help}/>
        </Switch>
      </div>
    );
  }
}

const ConnectedComponent = connect(null)(App);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
