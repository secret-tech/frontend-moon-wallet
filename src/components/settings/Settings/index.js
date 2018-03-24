import React from 'react';

import s from './styles.css';

import ChangePassword from '../../../containers/settings/ChangePassword';
import ChangeTheme from '../../../containers/settings/ChangeTheme';

const Settings = () => (
  <div className={s.wallets}>
    <div className={s.title}>
      <h1>Settings</h1>
    </div>

    <div className={s.body}>
      <div className={s.changePassword}>
        <ChangePassword/>
      </div>

      <div className={s.changeTheme}>
        <ChangeTheme/>

        <div className={s.tip}>Light theme may contain some errors. Dark - preferred.</div>
      </div>
    </div>
  </div>
);

export default Settings;
