import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from '@blueprintjs/core';

import { changeTheme } from '../../../redux/modules/app/theme';

import { THEMES } from '../../../utils/theme';

const ChangeTheme = (props) => {
  const {
    theme,
    changeTheme
  } = props;

  return (
    <div>
      <ButtonGroup large={false}>
        <Button
          iconName="moon"
          text="Dark theme"
          className={theme === THEMES.dark ? 'pt-active' : null}
          onClick={() => changeTheme(THEMES.dark)}/>

        <Button
          iconName="flash"
          text="Light theme"
          className={theme === THEMES.light ? 'pt-active' : null}
          onClick={() => changeTheme(THEMES.light)}/>
      </ButtonGroup>
    </div>
  );
};

export default connect(
  (state) => ({ ...state.app.theme }),
  {
    changeTheme
  }
)(ChangeTheme);
