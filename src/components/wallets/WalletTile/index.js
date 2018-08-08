import React, { Component } from 'react';
import windowSize from 'react-window-size';
// import { Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import Identicon from 'identicon.js';
import hexToRgb from 'hex-to-rgb';

import { getWalletColorPair, getWalletIcon } from './variants';
// import getBalances from './balances';
import { shortAddress } from '../../../utils/numbers';
import * as routes from '../../../routes';
import s from './styles.css';


class WalletTile extends Component {
  render() {
    const {
      // name,
      address,
      // color,
      windowWidth,

      // onClickExport,
      // onClickEdit
    } = this.props;

    const color = 1;

    // const balances = getBalances(props.balances);

    // const exportFn = (e) => {
    //   onClickExport(address);
    //   e.preventDefault();
    //   e.stopPropagation();
    // };
    //
    // const settingsFn = (e) => {
    //   onClickEdit(address);
    //   e.preventDefault();
    //   e.stopPropagation();
    // };

    const identiconOptions = {
      foreground: [255, 255, 255, 255],
      background: [
        hexToRgb(getWalletIcon).r,
        hexToRgb(getWalletIcon).g,
        hexToRgb(getWalletIcon).b,
        hexToRgb(getWalletIcon).a
      ],
      margin: 0.2,
      size: 50,
      format: 'svg'
    };

    const identionBase64 = new Identicon(address, identiconOptions).toString();

    return (
      <Link to={routes.formatRoute(routes.WALLET, { walletAddress: address })} className={s.wallet}>
        <div className="pt-card pt-interactive" style={{ backgroundColor: getWalletColorPair(color).bg }}>
          <div className={s.top}>
            <div className={s.pic} style={{ backgroundColor: getWalletColorPair(color).icon }}>
              <img src={`data:image/svg+xml;base64,${identionBase64}`}/>
            </div>
            <div className={s.info}>
              {/* <h3>Very long name untitled wallet raz dva tree</h3> */}
              <div className={s.address}>{windowWidth < 500 ? shortAddress(address) : address}</div>
            </div>
          </div>

          {/* <div className={s.balances}>
            {balances[1] ? <h4>{bigNum(balances[1].value, 2)} {balances[1].symbol}</h4> : null}
            {balances[2] ? <h4>{bigNum(balances[2].value, 2)} {balances[2].symbol}</h4> : null}
            {balances[3] ? <h4>{bigNum(balances[3].value, 2)} {balances[3].symbol}</h4> : null}
            {balances[4] ? <h4>{bigNum(balances[4].value, 2)} {balances[4].symbol}</h4> : null}
            {balances.moreLen
              ? <h6>{balances.moreLen} more assets</h6>
              : null}
          </div> */}

          {/* <div className={s.control}>
            <Button type="button" className="pt-minimal" icon="export" onClick={exportFn}/>
            <Button type="button" className="pt-minimal" icon="cog" onClick={settingsFn}/>
          </div> */}
        </div>
      </Link>
    );
  }
}


export default windowSize(WalletTile);
