import React from 'react';
import { Slider } from '@blueprintjs/core';

const RenderSlider = (props) => {
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
      <Slider className="" {...input} {...restProps}/>
    </div>
  );
};

export default RenderSlider;
