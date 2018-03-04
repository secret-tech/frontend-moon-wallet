import React from 'react';
import { NonIdealState } from '@blueprintjs/core';

import s from './styles.css';

const Preloader = (props) => (
  <div className={s.empty}>
    <NonIdealState {...props}/>
  </div>
);

export default Preloader;
