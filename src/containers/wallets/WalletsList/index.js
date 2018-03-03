import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWallets } from '../../../redux/modules/wallets/walletsList';
import { openExportWalletPopup } from '../../../redux/modules/wallets/exportWallet';
import { openEditWalletPopup } from '../../../redux/modules/wallets/editWallet';

import WalletTile from '../../../components/wallets/WalletTile';

class WalletsList extends Component {
  componentDidMount() {
    this.props.fetchWallets();
  }

  render() {
    return this.props.wallets.map((wallet) =>
      <WalletTile
        key={wallet.address}
        {...wallet}
        onClickExport={this.props.openExportWalletPopup}
        onClickEdit={this.props.openEditWalletPopup}/>);
  }
}

const ConnectedComponent = connect(
  (state) => ({
    ...state.wallets.walletsList
  }),
  {
    fetchWallets,
    openExportWalletPopup,
    openEditWalletPopup
  }
)(WalletsList);
export default ConnectedComponent;
