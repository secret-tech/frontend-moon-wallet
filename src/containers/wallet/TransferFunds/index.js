import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dialog } from '@blueprintjs/core';

import { closeTransferFundsPopup, initTransferFunds, verifyTransferFunds } from '../../../redux/modules/wallet/transferFunds';

import TransferFundsForm from '../../../components/wallet/TransferFundsForm';
import VerifyTransferFundsForm from '../../../components/wallet/VerifyTransferFundsForm';

const TransferFunds = (props) => {
  const {
    closeTransferFundsPopup,
    popupIsOpen,
    step,
    fetching,
    verification: {
      verificationId,
      method
    }
  } = props;

  const renderStep = (s) => {
    switch (s) {
      case 'initTransferFunds':
        return (
          <TransferFundsForm
            onSubmit={initTransferFunds}
            fetching={fetching}
            initialValues={{
              wallet: props.match.params.walletId
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
      className="pt-dark"
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
    ...state.wallet.transferFunds
  }),
  {
    closeTransferFundsPopup
  }
)(ComponentWithRouter);
export default ConnectedComponent;
