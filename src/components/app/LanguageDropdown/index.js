import React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';

const LanguageDropdown = ({ changeLanguage }) => (
  <Menu>
    <MenuItem
      icon={
        <img style={{ width: '16px' }} src={require('../../../assets/images/icons/flags/en.svg')}/>
      }
      text="English"
      onClick={() => changeLanguage('en')}/>

    <MenuItem
      icon={
        <img style={{ width: '16px' }} src={require('../../../assets/images/icons/flags/ru.svg')}/>
      }
      text="Russian"
      onClick={() => changeLanguage('ru')}/>
  </Menu>
);

export default LanguageDropdown;
