import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchTxs, startTxsPoll, endTxsPoll } from '../../../redux/modules/wallet/txs';
import { openTxDetailsPopup } from '../../../redux/modules/wallet/txDetails';

import Tx from '../../../components/wallet/Tx';
import Preloader from '../../../components/common/Preloader';
import EmptyState from '../../../components/common/EmptyState';

class Txs extends Component {
  componentDidMount() {
    this.props.fetchTxs(this.props.match.params.walletAddress);
    this.props.startTxsPoll();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.walletAddress !== nextProps.match.params.walletAddress) {
      this.props.fetchTxs(nextProps.match.params.walletAddress);
    }
  }

  componentWillUnmount() {
    this.props.endTxsPoll();
  }

  render() {
    const {
      data,
      fetching,
      openTxDetailsPopup
    } = this.props;

    if (fetching) return <Preloader/>;

    if (data.length > 0) {
      return data.map((tx) =>
        <Tx
          key={tx.transactionHash}
          openTxDetailsPopup={openTxDetailsPopup}
          tx={tx}/>);
    }

    return (
      <EmptyState
        title="No transactions here"
        description="Let's try to create new one"
        visual="cross"/>
    );
  }
}

const ConnectedComponent = connect(
  (state) => ({ ...state.wallet.txs }),
  {
    fetchTxs,
    startTxsPoll,
    endTxsPoll,
    openTxDetailsPopup
  }
)(Txs);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
