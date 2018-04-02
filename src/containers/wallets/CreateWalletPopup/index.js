import React from 'react';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';
import { Dialog } from '@blueprintjs/core';

import { initCreateWallet } from '../../../redux/modules/wallets/createWallet';

import CreateWalletForm from '../../../components/wallets/CreateWalletForm';

const CreateWalletPopup = (props) => {
  const {
    windowWidth
  } = props;

  const width = windowWidth > 400 ? '400px' : windowWidth - 40;

  return (
    <Dialog
      style={{ width, paddingBottom: '0px' }}
      title="Create wallet"
      {...props}>

      <div className="pt-dialog-body">
        <CreateWalletForm
          onSubmit={initCreateWallet}
          fetching={props.fetching}/>
      </div>
    </Dialog>
  );
};

const ConnectedComponent = connect((state) => ({
  fetching: state.wallets.createWallet.fetching,
  ...state.app.theme
}))(CreateWalletPopup);
const ComponentWithSize = windowSize(ConnectedComponent);
export default ComponentWithSize;
