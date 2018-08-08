import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

import { selectWallet } from '../../../redux/modules/wallet/selectedWallet';

import Balances from '../../../containers/wallet/Balances';
import Txs from '../../../containers/wallet/Txs';
import DepositFunds from '../DepositFunds';
import TransferFunds from '../TransferFunds';
import TxDetails from '../TxDetails';

import s from './styles.css';

class Wallet extends Component {
  componentDidMount() {
    this.props.selectWallet(this.props.match.params.walletAddress);
  }

  componentWillUnmount() {
    this.props.selectWallet(''); // reset selected wallet
  }

  render() {
    const {
      t
    } = this.props;

    return (
      <div className={s.container}>
        <div className={s.body}>
          <main className={s.main}>
            <h1>{t('title')}</h1>
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

const TranslatedComponent = translate('wallet')(Wallet);
const ConnectedComponent = connect(
  (state) => ({
    ...state.wallets.walletsList
  }),
  {
    selectWallet
  }
)(TranslatedComponent);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
