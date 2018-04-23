import React from 'react';

import { Checkbox } from '@blueprintjs/core';

const RenderCheckbox = (props) => {
  const {
    input,
    meta,
    ...restProps
  } = props;

  return (
    <div className="pt-form-group">
      <Checkbox {...input} {...restProps} />
    </div>
  );
};

export default RenderCheckbox;
