import React from 'react';

import s from './styles.css';

import ChangePassword from '../../../containers/settings/ChangePassword';

const Settings = () => (
  <div className={s.wallets}>
    <div className={s.title}>
      <h1>Settings</h1>
    </div>

    <div className={s.body}>
      <ChangePassword/>
    </div>
  </div>
);

export default Settings;
