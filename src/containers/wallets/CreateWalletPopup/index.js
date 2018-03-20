import React from 'react';
import { connect } from 'react-redux';
import { Dialog } from '@blueprintjs/core';

import { initCreateWallet } from '../../../redux/modules/wallets/createWallet';

import CreateWalletForm from '../../../components/wallets/CreateWalletForm';

const CreateWalletPopup = (props) => (
  <Dialog
    style={{ width: '400px', paddingBottom: '0px' }}
    title="Create wallet"
    className="pt-dark"
    {...props}>

    <div className="pt-dialog-body">
      <CreateWalletForm
        onSubmit={initCreateWallet}
        fetching={props.fetching}/>
    </div>
  </Dialog>
);

export default connect((state) => ({
  fetching: state.wallets.createWallet.fetching
}))(CreateWalletPopup);
