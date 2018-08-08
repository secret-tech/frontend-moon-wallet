import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { fetchUser } from '../../../redux/modules/app/user';
import { closeRegisterTokenPopup } from '../../../redux/modules/settings/registerCustomToken';

import NavigationBar from '../NavigationBar';
import Alert from '../../../components/common/Alert';
import Wallets from '../../../components/wallets/Wallets';
import Wallet from '../../wallet/Wallet';
import Settings from '../../../components/settings/Settings';
import Help from '../../../components/help/Help';
import Error404 from '../../../components/common/Error404';

import RegisterCustomTokenPopup from '../../settings/RegisterCustomTokenPopup';

import * as routes from '../../../routes';
import s from './styles.css';

class AppWrapper extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const {
      registerCustomToken,
      closeRegisterTokenPopup
    } = this.props;

    return (
      <div className={s.wrapper}>
        <div className={s.nav}>
          <NavigationBar/>
          <Alert/>
        </div>
        <Switch>
          <Route exact path={routes.WALLETS} component={Wallets}/>
          <Route path={routes.WALLET} component={Wallet}/>
          <Route exact path={routes.SETTINGS} component={Settings}/>
          <Route exact path={routes.HELP} component={Help}/>
          <Redirect exact from={routes.BASE} to={routes.WALLETS}/>
          <Route component={Error404}/>
        </Switch>

        <RegisterCustomTokenPopup
          isOpen={registerCustomToken.popupIsOpen}
          onClose={() => closeRegisterTokenPopup()}/>
      </div>
    );
  }
}

const ConnectedComponent = connect(
  (state) => ({
    registerCustomToken: state.settings.registerCustomToken
  }),
  {
    fetchUser,
    closeRegisterTokenPopup
  }
)(AppWrapper);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
