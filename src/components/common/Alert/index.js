import React from 'react';
import s from './styles.css';

const Alert = () => (
  <div className={s.alert}>
    <div className="pt-callout pt-intent-danger">
      <h5 className="pt-callout-title">TEST MODE - DO NOT SEND REAL FUNDS</h5>
      Currently application working in test mode, so
      do not send real funds to MOON wallets.<br/>
      You can get test ETHs here: <a href="http://faucet.ropsten.be:3001/" target="_blank">http://faucet.ropsten.be:3001/</a> Ropsten etherscan: <a href="https://ropsten.etherscan.io/" target="_blank">https://ropsten.etherscan.io/</a>
      <br/><br/>
      If you found bug or error you may <a href="https://github.com/JincorTech/frontend-moon-wallet/issues" target="_blank">create issue in github</a><br/>
      Join our <a href="https://t.me/MoonWallet" target="_blank">Telegram group</a>!
    </div>
  </div>
);

export default Alert;
