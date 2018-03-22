import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchTxs, startTxsPoll, endTxsPoll } from '../../../redux/modules/wallet/txs';

import Tx from '../../../components/wallet/Tx';
import Preloader from '../../../components/common/Preloader';
import EmptyState from '../../../components/common/EmptyState';

class Txs extends Component {
  componentDidMount() {
    this.props.fetchTxs(this.props.match.params.walletId);
    this.props.startTxsPoll();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.walletId !== nextProps.match.params.walletId) {
      this.props.fetchTxs(nextProps.match.params.walletId);
    }
  }

  componentWillUnmount() {
    this.props.endTxsPoll();
  }

  render() {
    const {
      txs,
      fetching
    } = this.props;

    if (fetching) return <Preloader/>;
    if (txs.length > 0) return txs.map((tx) => <Tx key={tx.transactionHash} {...tx}/>);
    return (
      <EmptyState
        title="No transactions here"
        description="Let's try to create new one"
        visual="pt-icon-cross"/>
    );
  }
}

const ConnectedComponent = connect(
  (state) => ({ ...state.wallet.txs }),
  {
    fetchTxs,
    startTxsPoll,
    endTxsPoll
  }
)(Txs);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
