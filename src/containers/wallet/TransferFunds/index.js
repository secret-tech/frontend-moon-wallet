import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dialog } from '@blueprintjs/core';

import { closeTransferFundsPopup, initTransferFunds, verifyTransferFunds } from '../../../redux/modules/wallet/transferFunds';

import TransferFundsForm from '../../../components/wallet/TransferFundsForm';
import VerifyTransferFundsForm from '../../../components/wallet/VerifyTransferFundsForm';

const TransferFunds = (props) => {
  const {
    theme,
    closeTransferFundsPopup,
    popupIsOpen,
    step,
    fetching,
    wallets,
    selectedWallet,
    verification: {
      verificationId,
      method
    }
  } = props;

  // find current wallet and get their tokens for select
  const tokensAccumulator = [
    { value: '', label: 'Select currency' },
    { value: 'eth_transfer', label: 'ETH' }
  ];

  const tokensReduce = (acc, { contractAddress, symbol }) =>
    acc.concat({ value: contractAddress, label: symbol });

  const walletsReduce = (acc, wallet) =>
    (wallet.address === selectedWallet
      ? wallet.tokens.reduce(tokensReduce, tokensAccumulator)
      : acc);

  const currencies = wallets.reduce(walletsReduce, []);

  const renderStep = (s) => {
    switch (s) {
      case 'initTransferFunds':
        return (
          <TransferFundsForm
            onSubmit={initTransferFunds}
            fetching={fetching}
            currencies={currencies}
            initialValues={{
              from: selectedWallet,
              gasPrice: 5,
              gasAmount: 21000
            }}/>
        );
      case 'verifyTransferFunds':
        return (
          <VerifyTransferFundsForm
            onSubmit={verifyTransferFunds}
            fetching={fetching}
            method={method}
            initialValues={{
              verification: { verificationId }
            }}/>
        );
      default:
        return 'Something went wrong';
    }
  };

  return (
    <Dialog
      style={{ width: '320px', paddingBottom: '0px' }}
      title="Transfer funds"
      className={theme}
      onClose={closeTransferFundsPopup}
      isOpen={popupIsOpen}>

      <div className="pt-dialog-body">
        {renderStep(step)}
      </div>
    </Dialog>
  );
};

const ComponentWithRouter = withRouter(TransferFunds);
const ConnectedComponent = connect(
  (state) => ({
    ...state.wallet.transferFunds,
    ...state.app.theme,
    wallets: state.app.user.wallets,
    selectedWallet: state.wallet.selectedWallet
  }),
  {
    closeTransferFundsPopup
  }
)(ComponentWithRouter);
export default ConnectedComponent;
