import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import { Card, Button } from '@blueprintjs/core';

import { fetchBalances, startBalancesPoll, endBalancesPoll } from '../../../redux/modules/wallet/balances';
import { openDepositFundsPopup } from '../../../redux/modules/wallet/depositFunds';
import { openTransferFundsPopup } from '../../../redux/modules/wallet/transferFunds';

import Preloader from '../../../components/common/Preloader';

import { bigNum } from '../../../utils/numbers';
import s from './styles.css';

class Balances extends Component {
  componentDidMount() {
    this.props.fetchBalances(this.props.match.params.walletAddress);
    this.props.startBalancesPoll();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.walletAddress !== nextProps.match.params.walletAddress) {
      this.props.fetchBalances(nextProps.match.params.walletAddress);
    }
  }

  componentWillUnmount() {
    this.props.endBalancesPoll();
  }

  render() {
    const {
      t,
      fetching,
      ethBalance,
      erc20TokensBalance,
      openDepositFundsPopup,
      openTransferFundsPopup
    } = this.props;

    const renderBalances = () => {
      if (fetching) {
        return (<Preloader/>);
      }

      return (
        <div>
          <div className={s.item}>
            <h2>{ethBalance}</h2>
            <div className="pt-text-muted">ETH {t('balances.balance')}</div>
          </div>
          {erc20TokensBalance.map(({ balance, symbol }) => (
            <div key={symbol} className={s.item}>
              <h2>{bigNum(balance)}</h2>
              <div className="pt-text-muted">{symbol} {t('balances.balance')}</div>
            </div>
          ))}
        </div>
      );

      // return erc20TokensBalance.map(({ value, symbol }) => (
      //   <div key={symbol} className={s.item}>
      //     <h2>{bigNum(value)}</h2>
      //     <div className="pt-text-muted">{symbol} balance</div>
      //   </div>
      // ));
    };

    return (
      <div>
        <div className={s.transferButton}>
          <Button
            text={t('balances.transferButton')}
            className="pt-intent-primary pt-large pt-fill"
            onClick={() => openTransferFundsPopup()}/>
        </div>

        <Card>
          <div className={s.items}>
            {renderBalances()}
          </div>

          <div className={s.depositButton}>
            <Button
              text={t('balances.depositButton')}
              className="pt-intent-primary"
              onClick={() => openDepositFundsPopup()}/>
          </div>
        </Card>
      </div>
    );
  }
}

const TranslatedComponent = translate('wallet')(Balances);
const ConnectedComponent = connect(
  (state) => ({ ...state.wallet.balances }),
  {
    fetchBalances,
    openDepositFundsPopup,
    openTransferFundsPopup,
    startBalancesPoll,
    endBalancesPoll
  }
)(TranslatedComponent);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
