import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import namedRoutes from '../../../routes';

import Nav from '../../../components/app/Nav';
import Wallets from '../../../components/wallets/Wallets';
import Wallet from '../../../components/wallet/Wallet';
import Settings from '../../../components/app/Settings';
import Help from '../../../components/help/Help';

import s from './styles.css';

class AppWrapper extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.nav}><Nav/></div>
        <Switch>
          <Route exact path={namedRoutes.wallets} component={Wallets}/>
          <Route path={`${namedRoutes.wallet}/:walletId`} component={Wallet}/>
          <Route path={namedRoutes.settings} component={Settings}/>
          <Route path={namedRoutes.help} component={Help}/>
          <Redirect from={namedRoutes.app} to={namedRoutes.wallets}/>
        </Switch>
      </div>
    );
  }
}

// const ConnectedComponent = connect(null)(Auth);
// const ComponentWithRouter = withRouter(ConnectedComponent);
export default AppWrapper;
