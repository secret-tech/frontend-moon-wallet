import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { required } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';
import RenderSelect from '../../_forms/RenderSelect';

const RegisterTokenForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching,
    walletsOptions
  } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Field
        component={RenderSelect}
        label="Choose wallet"
        name="walletAddress"
        options={[{ value: '', label: 'Select wallet...' }].concat(walletsOptions)}
        validate={required}/>

      <Field
        component={RenderInput}
        label="Contract address"
        placeholder="Contact address"
        name="contractAddress"
        fill
        disabled
        validate={required}/>

      <Field
        component={RenderInput}
        label="name"
        placeholder="Name"
        name="name"
        fill
        validate={required}/>

      <Field
        component={RenderInput}
        label="symbol"
        placeholder="Symbol"
        name="symbol"
        fill
        validate={required}/>

      <Field
        component={RenderInput}
        label="decimals"
        placeholder="Decimals"
        name="decimals"
        fill
        validate={required}/>

      <div>
        <Button
          type="submit"
          className="pt-fill"
          intent={Intent.PRIMARY}
          text="OK"
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'registerToken',
  initialValues: {
    walletAddress: '',
    contractAddress: '',
    name: '',
    symbol: '',
    decimals: ''
  }
})(RegisterTokenForm);

export default FormComponent;
