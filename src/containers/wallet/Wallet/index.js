import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectWallet } from '../../../redux/modules/wallet/selectedWallet';

import Balances from '../../../containers/wallet/Balances';
import Txs from '../../../containers/wallet/Txs';
import DepositFunds from '../DepositFunds';
import TransferFunds from '../TransferFunds';
import TxDetails from '../TxDetails';

import s from './styles.css';

class Wallet extends Component {
  componentDidMount() {
    this.props.selectWallet(this.props.match.params.walletId);
  }

  componentWillUnmount() {
    this.props.selectWallet(''); // reset selected wallet
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.body}>
          <main className={s.main}>
            <h1>Transactions</h1>
            <Txs/>
          </main>
          <aside className={s.sidebar}>
            <Balances/>
          </aside>
        </div>

        <DepositFunds/>
        <TransferFunds/>
        <TxDetails/>
      </div>
    );
  }
}

const ConnectedComponent = connect(
  (state) => ({
    ...state.wallets.walletsList
  }),
  {
    selectWallet
  }
)(Wallet);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
