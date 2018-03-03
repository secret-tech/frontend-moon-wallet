import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTxs } from '../../../redux/modules/wallet/txs';

import Tx from '../../../components/wallet/Tx';
import TxPreloader from '../../../components/wallet/TxsPreloader';

class Txs extends Component {
  componentDidMount() {
    this.props.fetchTxs();
  }

  render() {
    const { txs } = this.props;

    return txs.length > 1 ? txs.map((tx) => <Tx key={tx.txHash} {...tx}/>) : <TxPreloader/>;
  }
}

const ConnectedComponent = connect(
  (state) => ({ ...state.wallet.txs }),
  {
    fetchTxs
  }
)(Txs);
export default ConnectedComponent;
