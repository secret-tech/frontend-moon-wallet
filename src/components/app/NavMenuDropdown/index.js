import React from 'react';
import { Menu, MenuItem, MenuDivider, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { NavLink } from 'react-router-dom';

const NavMenuDropdown = ({ openRegisterTokenPopup, logout }) => (
  <Menu>
    {/* <MenuItem
      icon="duplicate"
      text="Copy address"/> */}

    <MenuItem
      icon="add"
      text="Register token"
      onClick={() => openRegisterTokenPopup()}/>

    {/* <li>
      <NavLink
        to="/help"
        className="pt-popover-dismiss pt-menu-item pt-icon-help"
        tabIndex="0">
        Help...
      </NavLink>
    </li> */}

    <MenuDivider />

    <li>
      <NavLink
        to="/settings"
        className="pt-popover-dismiss pt-menu-item"
        tabIndex="0">
        <Icon icon={IconNames.COG}/>
        <span>Settings...</span>
      </NavLink>
    </li>

    <MenuDivider />

    <MenuItem
      icon="log-out"
      text="Logout"
      onClick={() => logout()}/>
  </Menu>
);

export default NavMenuDropdown;
