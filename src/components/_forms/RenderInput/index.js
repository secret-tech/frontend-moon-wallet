import React from 'react';
import classnames from 'classnames/bind';

const RenderInput = (props) => {
  const {
    label,
    input,
    meta,
    icon,
    ...restProps
  } = props;

  const {
    error,
    invalid,
    active,
    visited
  } = meta;

  const isValid = () => {
    if (!active && invalid && visited) return false;
    if (!invalid) return true;

    return false;
  };

  const inputClassName = classnames(
    'pt-input',
    'pt-fill',
    // !isValid() ? 'pt-intent-danger' : null
  );

  return (
    <label className="pt-label">
      {label}
      <input className={inputClassName} {...input} {...restProps}/>
    </label>
  );
};

export default RenderInput;
