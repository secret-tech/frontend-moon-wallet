import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTxs } from '../../../redux/modules/wallet/txs';

import Tx from '../../../components/wallet/Tx';
import Preloader from '../../../components/common/Preloader';
import EmptyState from '../../../components/common/EmptyState';

class Txs extends Component {
  componentDidMount() {
    this.props.fetchTxs();
  }

  render() {
    const {
      txs,
      fetching
    } = this.props;

    if (fetching) return <Preloader/>;
    if (txs.length > 1) return txs.map((tx) => <Tx key={tx.txHash} {...tx}/>);
    return <EmptyState title="No transactions here" description="Let's try to create new one" visual="pt-icon-cross"/>;
  }
}

const ConnectedComponent = connect(
  (state) => ({ ...state.wallet.txs }),
  {
    fetchTxs
  }
)(Txs);
export default ConnectedComponent;
