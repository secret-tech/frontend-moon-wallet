import React from 'react';
import { Dialog } from '@blueprintjs/core';

import ExportWallet from '../../../components/wallets/ExportWallet';

const ExportWalletPopup = (props) => (
  <Dialog
    style={{ width: '800px' }}
    title="Export wallet"
    {...props}>

    <div className="pt-dialog-body">
      <ExportWallet walletAddress={props.walletAddress}/>
    </div>
  </Dialog>
);

export default ExportWalletPopup;
