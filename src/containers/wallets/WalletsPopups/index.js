import React from 'react';
import { connect } from 'react-redux';

import { closeCreateWalletPopup } from '../../../redux/modules/wallets/createWallet';
import { closeImportWalletPopup } from '../../../redux/modules/wallets/importWallet';
import { closeExportWalletPopup } from '../../../redux/modules/wallets/exportWallet';
import { closeEditWalletPopup } from '../../../redux/modules/wallets/editWallet';

import CreateWalletPopup from '../CreateWalletPopup';
import ImportWalletPopup from '../ImportWalletPopup';
import ExportWalletPopup from '../ExportWalletPopup';
import EditWalletPopup from '../EditWalletPopup';

const WalletsPopups = (props) => {
  const {
    theme,

    closeCreateWalletPopup,
    createWallet,

    closeImportWalletPopup,
    importWallet,

    closeExportWalletPopup,
    exportWallet,

    closeEditWalletPopup,
    editWallet
  } = props;

  return (
    <div>
      <CreateWalletPopup
        key="create-wallet-popup"
        className={theme}
        isOpen={createWallet.popupIsOpen}
        onClose={() => closeCreateWalletPopup()}/>
      <ImportWalletPopup
        key="import-wallet-popup"
        className={theme}
        isOpen={importWallet.popupIsOpen}
        onClose={() => closeImportWalletPopup()}/>
      <ExportWalletPopup
        key="export-wallet-popup"
        className={theme}
        isOpen={exportWallet.popupIsOpen}
        onClose={() => closeExportWalletPopup()}
        walletAddress={exportWallet.walletAddress}/>
      <EditWalletPopup
        key="edit-wallet-popup"
        className={theme}
        isOpen={editWallet.popupIsOpen}
        onClose={() => closeEditWalletPopup()}
        walletAddress={editWallet.walletAddress}/>
    </div>
  );
};

const ConnectedComponent = connect(
  (state) => ({
    ...state.wallets,
    ...state.app.theme
  }),
  {
    closeCreateWalletPopup,
    closeImportWalletPopup,
    closeExportWalletPopup,
    closeEditWalletPopup
  }
)(WalletsPopups);
export default ConnectedComponent;
