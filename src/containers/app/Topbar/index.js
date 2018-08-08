import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import windowSize from 'react-window-size';
import { ButtonGroup, Button, AnchorButton, Popover, Position } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import classnames from 'classnames/bind';

import { changeTheme } from '../../../redux/modules/app/theme';

import LanguageDropdown from '../../../components/app/LanguageDropdown';

import { THEMES } from '../../../utils/theme';
import s from './styles.css';

const Topbar = (props) => {
  const {
    t,
    windowWidth,
    i18n,
    changeTheme,
    theme
  } = props;

  const renderLanguageButton = () => {
    switch (i18n.language) {
      case 'ru': return <Button minimal icon={<img style={{ width: '16px' }} src={require('../../../assets/images/icons/flags/ru.svg')}/>}/>;
      default: return <Button minimal icon={<img style={{ width: '16px' }} src={require('../../../assets/images/icons/flags/en.svg')}/>}/>;
    }
  };

  return (
    <div className={s.topbar}>
      <div>
        <AnchorButton
          href="https://moonwallet.tech"
          minimal
          icon={IconNames.CHEVRON_LEFT}>
          {windowWidth > 800 && t('auth:backToLandingPage')}
        </AnchorButton>
      </div>

      <div>
        <ButtonGroup large={false}>
          <Button
            icon="moon"
            text={windowWidth > 800 && t('common:themes.dark')}
            className={classnames(theme === THEMES.dark ? 'pt-active' : null, 'pt-minimal')}
            onClick={() => changeTheme(THEMES.dark)}/>

          <Button
            icon="flash"
            text={windowWidth > 800 && t('common:themes.light')}
            className={classnames(theme === THEMES.light ? 'pt-active' : null, 'pt-minimal')}
            onClick={() => changeTheme(THEMES.light)}/>
        </ButtonGroup>

        <Popover
          content={<LanguageDropdown/>}
          position={Position.TOP_RIGHT}>
          {renderLanguageButton()}
        </Popover>
      </div>
    </div>
  );
};

const ConnectedComponent = connect(
  (state) => ({ ...state.app.theme }),
  {
    changeTheme
  }
)(Topbar);
const ComponentWithDemensions = windowSize(ConnectedComponent);
const TranslatedComponent = translate(['common', 'auth'])(ComponentWithDemensions);
export default TranslatedComponent;
