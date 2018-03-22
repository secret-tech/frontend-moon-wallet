import React from 'react';
import { NumericInput } from '@blueprintjs/core';

const RenderNumber = (props) => {
  const {
    label,
    input,
    meta,
    icon,
    ...restProps
  } = props;

  return (
    <div className="pt-form-group">
      {label
        ? (<label className="pt-label">
          {label}
        </label>)
        : null}
      <div>
        <NumericInput className="pt-fill" {...input} {...restProps} onValueChange={input.onChange}/>
      </div>
    </div>
  );
};

export default RenderNumber;
