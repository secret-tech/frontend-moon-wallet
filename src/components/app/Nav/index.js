import React from 'react';
import { Link } from 'react-router-dom';

import { namedRoutes } from '../../../routes';

export default () => (
  <nav>
    <Link to={namedRoutes.dashboard}>Dashboard</Link>
    <Link to={namedRoutes.settings}>Settings</Link>
  </nav>
);
