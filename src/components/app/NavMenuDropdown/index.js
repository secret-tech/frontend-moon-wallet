import React from 'react';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';
import { NavLink } from 'react-router-dom';

const NavMenuDropdown = ({ openRegisterTokenPopup }) => (
  <Menu>
    <MenuItem
      iconName="duplicate"
      text="Copy address"/>

    <MenuItem
      iconName="add"
      text="Register token"
      onClick={() => openRegisterTokenPopup()}/>

    <li>
      <NavLink
        to="/app/help"
        className="pt-popover-dismiss pt-menu-item pt-icon-help"
        tabIndex="0">
        Help...
      </NavLink>
    </li>

    <MenuDivider />

    <li>
      <NavLink
        to="/app/settings"
        className="pt-popover-dismiss pt-menu-item pt-icon-cog"
        tabIndex="0">
        Settings...
      </NavLink>
    </li>

    <MenuDivider />

    <MenuItem
      iconName="pt-icon-log-out"
      text="Logout"/>
  </Menu>
);

export default NavMenuDropdown;
