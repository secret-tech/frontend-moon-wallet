import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';

import { openExportWalletPopup } from '../../../redux/modules/wallets/exportWallet';
import { openEditWalletPopup } from '../../../redux/modules/wallets/editWallet';

import WalletTile from '../../../components/wallets/WalletTile';
import Preloader from '../../../components/common/Preloader';
import EmptyState from '../../../components/common/EmptyState';

class WalletsList extends Component {
  render() {
    const {
      t,
      wallets,
      fetching
    } = this.props;

    console.log(this.props);

    if (fetching) return <Preloader/>;

    if (wallets.length > 0) {
      return wallets.map((wallet) =>
        (<WalletTile
          key={wallet.address}
          {...wallet}
          onClickExport={this.props.openExportWalletPopup}
          onClickEdit={this.props.openEditWalletPopup}/>
        ));
    }

    return (
      <EmptyState
        title={t('walletsList.notFound.title')}
        description={t('walletsList.notFound.text')}
        visual="cross"/>
    );
  }
}

const TranslatedComponent = translate('wallets')(WalletsList);
const ConnectedComponent = connect(
  (state) => ({
    ...state.app.user
  }),
  {
    openExportWalletPopup,
    openEditWalletPopup
  }
)(TranslatedComponent);
export default ConnectedComponent;
