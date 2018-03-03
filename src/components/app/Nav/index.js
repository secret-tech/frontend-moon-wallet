import React from 'react';
import { Navbar, NavbarGroup, NavbarHeading, Button, Popover, Position } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import NavMenuDropdown from '../NavMenuDropdown';
import NavWalletDropdown from '../NavWalletDropdown';

const Nav = () => (
  <Navbar className="pt-dark">
    <NavbarGroup>
      <NavbarHeading><Link to="/">MOON</Link></NavbarHeading>
    </NavbarGroup>

    <NavbarGroup className="pt-align-right">
      <Popover content={<NavWalletDropdown/>} position={Position.BOTTOM_RIGHT}>
        <Button className="pt-minimal" iconName="expand-all" text="My Awesome Wallet 0x0qb...ab12a" />
      </Popover>
      <Popover content={<NavMenuDropdown/>} position={Position.BOTTOM_RIGHT}>
        <Button className="pt-minimal" iconName="cog" />
      </Popover>
    </NavbarGroup>
  </Navbar>
);

export default Nav;
