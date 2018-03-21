import React from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarGroup, NavbarHeading, Button, Popover, Position } from '@blueprintjs/core';
import { Link, withRouter } from 'react-router-dom';

import { selectWallet } from '../../../redux/modules/wallet/selectedWallet';
import { openRegisterTokenPopup } from '../../../redux/modules/settings/registerCustomToken';
import { logout } from '../../../redux/modules/app/app';

import NavMenuDropdown from '../../../components/app/NavMenuDropdown';
import NavWalletDropdown from '../../../components/app/NavWalletDropdown';

import { shortAddress } from '../../../utils/numbers';
import s from './styles.css';

const Nav = (props) => {
  const {
    wallets,
    selectedWallet,
    selectWallet,
    openRegisterTokenPopup,
    logout
  } = props;

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
          <Button className="pt-minimal" iconName="expand-all" text={text} />
        </Popover>
      );
    }

    return null;
  };

  return (
    <Navbar className="pt-dark">
      <NavbarGroup>
        <NavbarHeading>
          <Link to="/wallets" className={s.logo}>
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
          <Button className="pt-minimal" iconName="cog" />
        </Popover>
      </NavbarGroup>
    </Navbar>
  );
};

const ConnectedComponent = connect(
  (state) => ({
    wallets: state.app.user.wallets,
    selectedWallet: state.wallet.selectedWallet
  }),
  {
    selectWallet,
    openRegisterTokenPopup,
    logout
  }
)(Nav);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
