import React from 'react';
import { Spinner } from '@blueprintjs/core';

import s from './styles.css';

const TxsPreloader = () => (
  <div className={s.preloader}>
    <Spinner className="pt-large"/>
  </div>
);

export default TxsPreloader;
