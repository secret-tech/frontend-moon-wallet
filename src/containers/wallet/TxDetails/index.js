import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dialog } from '@blueprintjs/core';

import { closeTxDetailsPopup } from '../../../redux/modules/wallet/txDetails';

import s from './styles.css';
import { etherscanLink } from '../../../utils/numbers';

const TxDetails = (props) => {
  const {
    theme,
    closeTxDetailsPopup,
    popupIsOpen,
    from,
    to,
    transactionHash,
    amount,
    symbol,
    dir,
    blockNumber,
    datetime,
    status
  } = props;

  return (
    <Dialog
      style={{ width: '600px', paddingBottom: '0px' }}
      title="Transaction details"
      className={theme}
      onClose={closeTxDetailsPopup}
      isOpen={popupIsOpen}>

      <div className="pt-dialog-body">
        <div className={s.things}>
          <div className={s.thing}>
            <h6>Amount</h6>
            <div>{amount} {symbol} {dir}</div>
          </div>
          <div className={s.thing}>
            <h6>Status</h6>
            <div>{status}</div>
          </div>
          <div className={s.thing}>
            <h6>Date</h6>
            <div>{datetime}</div>
          </div>
          {props.token.contractAddress && (
            <div className={s.thing}>
              <h6>{symbol} token contacts address</h6>
              <div><a target="_blank" href={etherscanLink('address', props.token.contractAddress)}>{props.token.contractAddress}</a></div>
            </div>
          )}
          <div className={s.thing}>
            <h6>Transaction hash</h6>
            <div><a target="_blank" href={etherscanLink('tx', transactionHash)}>{transactionHash}</a></div>
          </div>
          <div className={s.thing}>
            <h6>From</h6>
            <div><a target="_blank" href={etherscanLink('address', from)}>{from}</a></div>
          </div>
          <div className={s.thing}>
            <h6>To</h6>
            <div><a target="_blank" href={etherscanLink('address', to)}>{to}</a></div>
          </div>
          <div className={s.thing}>
            <h6>Block number</h6>
            <div><a target="_blank" href={etherscanLink('block', blockNumber)}>{blockNumber}</a></div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const ComponentWithRouter = withRouter(TxDetails);
const ConnectedComponent = connect(
  (state) => ({
    ...state.wallet.txDetails,
    ...state.app.theme
  }),
  {
    closeTxDetailsPopup
  }
)(ComponentWithRouter);
export default ConnectedComponent;
