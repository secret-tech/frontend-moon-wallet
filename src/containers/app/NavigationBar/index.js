import React, { Component } from 'react';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';
import { Navbar, NavbarGroup, NavbarHeading, Button, Popover, Position } from '@blueprintjs/core';
import { Link, withRouter } from 'react-router-dom';

import { selectWallet } from '../../../redux/modules/wallet/selectedWallet';
import { openRegisterTokenPopup } from '../../../redux/modules/settings/registerCustomToken';
import { logout } from '../../../redux/modules/app/app';

import NavMenuDropdown from '../../../components/app/NavMenuDropdown';
import NavWalletDropdown from '../../../components/app/NavWalletDropdown';

import { shortAddress } from '../../../utils/numbers';
import * as routes from '../../../routes';
import s from './styles.css';

class NavigationBar extends Component {
  render() {
    const {
      theme,
      wallets,
      selectedWallet,
      selectWallet,
      openRegisterTokenPopup,
      logout,
      windowWidth
    } = this.props;

    const currentWallet = wallets.filter((wallet) => wallet.address === selectedWallet)[0];

    const renderWalletsDropdown = () => {
      if (currentWallet) {
        const text = `${shortAddress(currentWallet.address)}`;
        return (
          <Popover
            content={
              <NavWalletDropdown
                wallets={wallets}
                selectedWallet={selectedWallet}
                selectWallet={selectWallet}/>
            }
            position={Position.BOTTOM_RIGHT}>
            <Button className="pt-minimal" icon="expand-all" text={windowWidth < 500 ? null : text} />
          </Popover>
        );
      }

      return null;
    };

    return (
      <Navbar className={theme}>
        <NavbarGroup>
          <NavbarHeading>
            <Link to={routes.WALLETS} className={s.logo}>
              <img src={require('../../../assets/images/logo.svg')}/>
              <span>MOON Wallet</span>
            </Link>
          </NavbarHeading>
        </NavbarGroup>

        <NavbarGroup className="pt-align-right">
          {renderWalletsDropdown()}
          <Popover
            content={
              <NavMenuDropdown
                openRegisterTokenPopup={openRegisterTokenPopup}
                logout={logout}/>
            }
            position={Position.BOTTOM_RIGHT}>
            <Button className="pt-minimal" icon="cog" />
          </Popover>
        </NavbarGroup>
      </Navbar>
    );
  }
}


const ConnectedComponent = connect(
  (state) => ({
    wallets: state.app.user.wallets,
    selectedWallet: state.wallet.selectedWallet,
    ...state.app.theme
  }),
  {
    selectWallet,
    openRegisterTokenPopup,
    logout
  }
)(NavigationBar);
const ComponentWithRouter = withRouter(ConnectedComponent);
const ComponentWithSize = windowSize(ComponentWithRouter);
export default ComponentWithSize;
