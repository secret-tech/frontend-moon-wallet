import React from 'react';
import { format } from 'date-fns';
import { Tag, Intent } from '@blueprintjs/core';

import { shortAddress } from '../../../utils/numbers';
import s from './styles.css';

const Tx = (props) => {
  const {
    direction,
    value,
    symbol,
    txHash,
    status,
    date
  } = props;

  const dir = () => (direction === 'in' ? 'Income' : 'Withdraw');

  const renderStatus = () => {
    switch (status) {
      case 'pending':
        return (<Tag className="pt-minimal" intent={Intent.PRIMARY}>Pending</Tag>);
      case 'success':
        return (<Tag className="pt-minimal" intent={Intent.SUCCESS}>Success</Tag>);
      default:
        return (<Tag className="pt-minimal" intent={Intent.DANGER}>Failure</Tag>);
    }
  };

  return (
    <div className={s.tx}>
      <h4>
        <span>{dir()} {value} {symbol}</span>
        <a href={`http://etherscan.com/tx/${txHash}`}>{shortAddress(txHash)}</a>
        {renderStatus()}
      </h4>
      <div className="pt-text-muted">{format(date * 1000, 'DD MMMM YYYY HH:mm:ss')}</div>
    </div>
  );
};

export default Tx;
