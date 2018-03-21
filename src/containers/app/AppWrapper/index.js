import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { fetchUser } from '../../../redux/modules/app/user';
import { closeRegisterTokenPopup } from '../../../redux/modules/settings/registerCustomToken';

import Nav from '../Nav';
import Wallets from '../../../components/wallets/Wallets';
import Wallet from '../../wallet/Wallet';
import Settings from '../../../components/settings/Settings';
import Help from '../../../components/help/Help';
import Error404 from '../../../components/common/Error404';

import RegisterCustomTokenPopup from '../../settings/RegisterCustomTokenPopup';

import namedRoutes from '../../../routes';
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

    const e404 = () => (
      <div className={s.e404}><Error404/></div>
    );

    return (
      <div className={s.wrapper}>
        <div className={s.nav}>
          <Nav/>

          <div className={s.alert}>
            <div className="pt-callout pt-intent-danger">
              <h5 className="pt-callout-title">TEST MODE - DO NOT SEND REAL FUNDS</h5>
              Currently application working in test mode, so
              do not send real funds to MOON wallets.<br/>
              You can get test ETHs here: <a href="http://faucet.ropsten.be:3001/" target="_blank">http://faucet.ropsten.be:3001/</a> Ropsten etherscan: <a href="https://ropsten.etherscan.io/" target="_blank">https://ropsten.etherscan.io/</a>
              <br/><br/>
              If you found bug or error you may <a href="https://github.com/JincorTech/frontend-moon-wallet/issues" target="_blank">create issue in github</a><br/>
              Join our <a href="https://t.me/MoonWallet" target="_blank">Telegram group</a>!
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path={namedRoutes.wallets} component={Wallets}/>
          <Route path={`${namedRoutes.wallet}/:walletId`} component={Wallet}/>
          <Route path={namedRoutes.settings} component={Settings}/>
          <Route path={namedRoutes.help} component={Help}/>
          <Route component={e404}/>
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
