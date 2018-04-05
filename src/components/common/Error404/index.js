import React from 'react';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

const Error404 = () => (
  <div className="pt-non-ideal-state">
    <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
      <Icon icon={IconNames.ERROR} iconSize={60} />
    </div>
    <h4 className="pt-non-ideal-state-title">This is 404</h4>
  </div>
);

export default Error404;
