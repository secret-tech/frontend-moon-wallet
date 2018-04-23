import React, { Component } from 'react';
import classnames from 'classnames/bind';

import { Button } from '@blueprintjs/core';

import s from './styles.css';

class RenderPassword extends Component {
  constructor(props) {
    super(props);

    this.state = { type: 'password' };
  }

  render() {
    const {
      label,
      input,
      meta,
      icon,
      large,
      fill,
      tip,
      ...restProps
    } = this.props;

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

    const formGroupClassName = classnames(
      'pt-form-group',
      isInvalid() ? 'pt-intent-danger' : null
    );

    const inputGroupClassName = classnames(
      'pt-input-group',
      large ? 'pt-large' : null,
      fill ? 'pt-fill' : null
    );

    const inputClassName = classnames(
      'pt-input',
      fill ? 'pt-fill' : null,
      isInvalid() ? 'pt-intent-danger' : null
    );

    const buttonClassName = classnames(
      'pt-minimal',
      large ? 'pt-large' : null
    );

    const renderButton = () => {
      if (this.state.type === 'password') {
        return (
          <Button
            className={buttonClassName}
            icon="eye-open"
            onClick={() => this.setState({ type: 'text' })}/>
        );
      }

      return (
        <Button
          className={buttonClassName}
          icon="eye-off"
          onClick={() => this.setState({ type: 'password' })}/>
      );
    };

    return (
      <div className={formGroupClassName}>
        {label
          ? (<label className="pt-label">
              {label}
            </label>)
          : null}

        <div className={inputGroupClassName}>
          <input {...input} {...restProps} className={inputClassName} type={this.state.type}/>
          {renderButton()}
        </div>
        {isInvalid() ? <div className="pt-form-helper-text">{error}</div> : null}

        {!tip ? null : (<div className={s.tip}>
          Password must be at least 8 characters length.
        </div>)}
      </div>
    );
  }
}

export default RenderPassword;
