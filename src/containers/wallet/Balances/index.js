import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import { Callout, Button, Intent } from '@blueprintjs/core';

import { fetchBalances, startBalancesPoll, endBalancesPoll } from '../../../redux/modules/wallet/balances';
import { openDepositFundsPopup } from '../../../redux/modules/wallet/depositFunds';
import { openTransferFundsPopup } from '../../../redux/modules/wallet/transferFunds';

import Block from '../../../components/common/Block';

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
      if (fetching) return null;
      return erc20TokensBalance.map(({ balance, symbol }) => (
          <Block
            key={symbol}
            label={`${symbol} ${t('balances.balance')}`}
            value={`${bigNum(balance)} ${symbol}`}/>
      ));
    };

    return (
      <div>
        <div className={s.transferButton}>
          <Button
            text={t('balances.transferButton')}
            className="pt-intent-primary pt-large pt-fill"
            onClick={() => openTransferFundsPopup()}/>
        </div>

        <Callout title={t('balances.title')}>
          <Block
            label={`ETH ${t('balances.balance')}`}
            value={`${bigNum(ethBalance)} ETH`}
            fetching={fetching}/>

          {renderBalances()}

          <Button
            size="small"
            icon="plus"
            minimal={true}
            text={t('balances.depositButton')}
            intent={Intent.PRIMARY}
            onClick={() => openDepositFundsPopup()}/>
        </Callout>
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
