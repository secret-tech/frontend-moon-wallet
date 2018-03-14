import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { fetchUser } from '../../../redux/modules/app/user';

import Nav from '../Nav';
import Wallets from '../../../components/wallets/Wallets';
import Wallet from '../../wallet/Wallet';
import Settings from '../../../components/app/Settings';
import Help from '../../../components/help/Help';

import namedRoutes from '../../../routes';
import s from './styles.css';

class AppWrapper extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.nav}>
          <Nav/>
        </div>
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

const ConnectedComponent = connect(
  null,
  {
    fetchUser
  }
)(AppWrapper);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
