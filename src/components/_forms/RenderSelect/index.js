import React from 'react';
import classnames from 'classnames/bind';

const RenderSelect = (props) => {
  const {
    label,
    input,
    meta,
    icon,
    options,
    ...restProps
  } = props;

  const {
    error,
    invalid,
    active,
    dirty
  } = meta;

  const isInvalid = () => {
    if (!active && invalid && dirty) return true;
    if (!invalid) return false;

    return null;
  };

  const inputClassName = classnames(
    'pt-select',
    'pt-fill',
    isInvalid() ? 'pt-intent-danger' : null
  );

  const formGroupClassName = classnames(
    'pt-form-group',
    isInvalid() ? 'pt-intent-danger' : null
  );

  return (
    <div className={formGroupClassName}>
      {label
        ? (<label className="pt-label">
          {label}
        </label>)
        : null}
      <div className={inputClassName}>
        <select {...input} {...restProps}>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {isInvalid() ? <div className="pt-form-helper-text">{error}</div> : null}
      </div>
    </div>
  );
};

export default RenderSelect;
