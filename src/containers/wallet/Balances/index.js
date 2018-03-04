import React from 'react';
import { Card, Button } from '@blueprintjs/core';

import s from './styles.css';

const Balances = () => (
  <div>
    <div className={s.transferButton}>
      <Button text="Transfer tokens" className="pt-intent-primary pt-large pt-fill"/>
    </div>

    <Card>
      <div className={s.items}>
        <div className={s.item}>
          <h2>123.123944</h2>
          <div className="pt-text-muted">ETH balance</div>
        </div>

        <div className={s.item}>
          <h2>123.123944</h2>
          <div className="pt-text-muted">ETH balance</div>
        </div>

        <div className={s.item}>
          <h2>123.123944</h2>
          <div className="pt-text-muted">ETH balance</div>
        </div>
      </div>

      <div className={s.depositButton}>
        <Button text="Deposit funds" className="pt-intent-primary"/>
      </div>
    </Card>
  </div>
);

export default Balances;
