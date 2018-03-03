import React from 'react';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

const NavWalletDropdown = () => (
  <Menu>
    <MenuItem text="My awesome wallet 0xa01...123ba" />
    <MenuItem text="Another wallet 0xb01...ab123" />
    <MenuItem text="Untitled 0x001...12311" />
    <MenuDivider />
    <MenuItem text="Wallets..."/>
  </Menu>
);

export default NavWalletDropdown;
