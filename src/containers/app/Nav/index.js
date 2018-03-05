import React from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarGroup, NavbarHeading, Button, Popover, Position } from '@blueprintjs/core';
import { Link, withRouter } from 'react-router-dom';

import { selectWallet } from '../../../redux/modules/wallet/selectedWallet';

import NavMenuDropdown from '../../../components/app/NavMenuDropdown';
import NavWalletDropdown from '../../../components/app/NavWalletDropdown';

import { shortAddress } from '../../../utils/numbers';

const Nav = (props) => {
  const { wallets, selectedWallet, selectWallet } = props;
  const currentWallet = wallets.filter((wallet) => wallet.address === selectedWallet)[0];

  const renderWalletsDropdown = () => {
    if (currentWallet) {
      const text = `${currentWallet.name} ${shortAddress(currentWallet.address)}`;
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
        <NavbarHeading><Link to="/">MOON</Link></NavbarHeading>
      </NavbarGroup>

      <NavbarGroup className="pt-align-right">
        {renderWalletsDropdown()}
        <Popover content={<NavMenuDropdown/>} position={Position.BOTTOM_RIGHT}>
          <Button className="pt-minimal" iconName="cog" />
        </Popover>
      </NavbarGroup>
    </Navbar>
  );
};

const ConnectedComponent = connect(
  (state) => ({
    ...state.wallets.walletsList,
    selectedWallet: state.wallet.selectedWallet
  }),
  {
    selectWallet
  }
)(Nav);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
