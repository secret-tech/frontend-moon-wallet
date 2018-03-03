import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWallets } from '../../../redux/modules/wallets/walletsList';

import WalletTile from '../../../components/wallets/WalletTile';

class WalletsList extends Component {
  componentDidMount() {
    this.props.fetchWallets();
  }

  render() {
    return this.props.wallets.map((wallet) =>
      <WalletTile
        key={wallet.address}
        {...wallet}/>);
  }
}

const ConnectedComponent = connect(
  (state) => ({
    ...state.wallets.walletsList
  }),
  {
    fetchWallets
  }
)(WalletsList);
export default ConnectedComponent;
