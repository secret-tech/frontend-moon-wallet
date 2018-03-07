import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, Button } from '@blueprintjs/core';

import { fetchBalances } from '../../../redux/modules/wallet/balances';
import { openDepositFundsPopup } from '../../../redux/modules/wallet/depositFunds';

import Preloader from '../../../components/common/Preloader';

import { bigNum } from '../../../utils/numbers';
import s from './styles.css';

class Balances extends Component {
  componentDidMount() {
    this.props.fetchBalances(this.props.match.params.walletId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.walletId !== nextProps.match.params.walletId) {
      this.props.fetchBalances(nextProps.match.params.walletId);
    }
  }

  render() {
    const {
      fetching,
      balances,
      openDepositFundsPopup
    } = this.props;

    const renderBalances = () => {
      if (fetching) {
        return (<Preloader/>);
      }

      if (balances.length < 1) {
        return (
          <div className={s.item}>
            <h2>0</h2>
            <div className="pt-text-muted">ETH balance</div>
          </div>
        );
      }

      return balances.map(({ value, symbol }) => (
        <div key={symbol} className={s.item}>
          <h2>{bigNum(value)}</h2>
          <div className="pt-text-muted">{symbol} balance</div>
        </div>
      ));
    };

    return (
      <div>
        <div className={s.transferButton}>
          <Button text="Transfer tokens" className="pt-intent-primary pt-large pt-fill"/>
        </div>

        <Card>
          <div className={s.items}>
            {renderBalances()}
          </div>

          <div className={s.depositButton}>
            <Button
              text="Deposit funds"
              className="pt-intent-primary"
              onClick={() => openDepositFundsPopup()}/>
          </div>
        </Card>
      </div>
    );
  }
}

const ConnectedComponent = connect(
  (state) => ({ ...state.wallet.balances }),
  {
    fetchBalances,
    openDepositFundsPopup
  }
)(Balances);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
