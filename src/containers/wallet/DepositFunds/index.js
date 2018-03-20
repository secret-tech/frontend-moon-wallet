import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dialog } from '@blueprintjs/core';

import { closeDepositFundsPopup } from '../../../redux/modules/wallet/depositFunds';

import s from './styles.css';

const DepositFunds = (props) => {
  const {
    closeDepositFundsPopup,
    popupIsOpen
  } = props;

  return (
    <Dialog
      style={{ width: '700px', paddingBottom: '0px' }}
      title="Deposit funds"
      className="pt-dark"
      onClose={closeDepositFundsPopup}
      isOpen={popupIsOpen}>

      <div className="pt-dialog-body">
        <div className={s.description}>TODO description about depositting</div>

        <h3 className={s.address}>{props.match.params.walletId}</h3>
      </div>
    </Dialog>
  );
};

const ComponentWithRouter = withRouter(DepositFunds);
const ConnectedComponent = connect(
  (state) => ({
    ...state.wallet.depositFunds
  }),
  {
    closeDepositFundsPopup
  }
)(ComponentWithRouter);
export default ConnectedComponent;
