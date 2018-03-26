import React from 'react';
import { format } from 'date-fns';
import { Tag, Intent, Button } from '@blueprintjs/core';

import { shortAddress, etherscanLink } from '../../../utils/numbers';
import s from './styles.css';

const Tx = (props) => {
  const {
    tx: {
      type,
      direction,
      amount,
      transactionHash,
      status,
      timestamp,
    },
    openTxDetailsPopup
  } = props;

  const dir = () => (direction === 'out' ? 'withdraw' : 'Income');

  const renderStatus = () => {
    switch (status) {
      case 'pending':
        return (<Tag className="pt-minimal" intent={Intent.PRIMARY}>Pending</Tag>);
      case 'confirmed':
        return (<Tag className="pt-minimal" intent={Intent.SUCCESS}>Success</Tag>);
      default:
        return (<Tag className="pt-minimal" intent={Intent.DANGER}>Failure</Tag>);
    }
  };

  const symbol = () => {
    if (type === 'eth_transfer') return 'ETH';
    return props.tx.token.symbol;
  };

  return (
    <div className={s.tx}>
      <h4>
        <span>{amount} {symbol()} {dir()}</span>
        <a target="_blank" href={etherscanLink('tx', transactionHash)}>{shortAddress(transactionHash)}</a>
        {renderStatus()}
        <div className={s.details}>
          <Button
            className="pt-small pt-minimal"
            text="Details..."
            onClick={() => openTxDetailsPopup({
              dir: dir(),
              symbol: symbol(),
              datetime: format(timestamp * 1000, 'DD MMMM YYYY HH:mm:ss'),
              ...props.tx
            })}/>
        </div>
      </h4>
      <div className="pt-text-muted">
        {format(timestamp * 1000, 'DD MMMM YYYY HH:mm:ss')}
      </div>
    </div>
  );
};

export default Tx;
