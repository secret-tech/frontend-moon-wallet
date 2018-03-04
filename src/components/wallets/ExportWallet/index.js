import React from 'react';

import s from './styles.css';

const ExportWallet = ({ walletAddress }) => (
  <div>
    <div className={s.alert}>
      <div className="pt-card" style={{ backgroundColor: '#A82A2A' }}>
        Do not send this data to untested individuals,
        otherwise they will get full control over your funds.
      </div>
    </div>

    <div className={s.fields}>
      <div className={s.field}>
        <h6 className="pt-text-muted">Wallet address</h6>
        <h4>{walletAddress}</h4>
      </div>

      <div className={s.field}>
        <h6 className="pt-text-muted">Private key</h6>
        <h4>3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266</h4>
      </div>

      <div className={s.field}>
        <h6 className="pt-text-muted">Mnemonic phrase</h6>
        <h4>witch collapse practice feed shame open despair creek road again ice least</h4>
      </div>
    </div>
  </div>
);

export default ExportWallet;
