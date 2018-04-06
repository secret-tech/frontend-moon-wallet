import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openExportWalletPopup } from '../../../redux/modules/wallets/exportWallet';
import { openEditWalletPopup } from '../../../redux/modules/wallets/editWallet';

import WalletTile from '../../../components/wallets/WalletTile';
import Preloader from '../../../components/common/Preloader';
import EmptyState from '../../../components/common/EmptyState';

class WalletsList extends Component {
  render() {
    const {
      wallets,
      fetching
    } = this.props;

    if (fetching) return <Preloader/>;

    if (wallets.length > 0) {
      return wallets.map((wallet) =>
        <WalletTile
          key={wallet.address}
          {...wallet}
          onClickExport={this.props.openExportWalletPopup}
          onClickEdit={this.props.openEditWalletPopup}/>);
    }

    return <EmptyState
      title="No wallets here"
      description="Let's try to create or import new one"
      visual="cross"/>;
  }
}

const ConnectedComponent = connect(
  (state) => ({
    ...state.app.user
  }),
  {
    openExportWalletPopup,
    openEditWalletPopup
  }
)(WalletsList);
export default ConnectedComponent;
