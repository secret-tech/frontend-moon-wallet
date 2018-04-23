import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { paymentPasswordValidate, required } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';
import RenderSelect from '../../_forms/RenderSelect';
import RenderPaymentPassword from '../../_forms/RenderPaymentPassword';
import RenderNumber from '../../_forms/RenderNumber';
import RenderSlider from '../../_forms/RenderSlider';

import s from './styles.css';

class TransferFundsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      extend: false
    };
  }

  render() {
    const {
      handleSubmit,
      invalid,
      fetching,
      currencies
    } = this.props;

    const { extend } = this.state;

    return (
      <form onSubmit={handleSubmit}>

        <Field
          component={RenderInput}
          label="Recepient address"
          name="to"
          type="text"
          fill
          validate={required}/>

        <Field
          component={RenderInput}
          label="Amount"
          name="amount"
          type="text"
          fill
          validate={required}/>

        <Field
          component={RenderSelect}
          label="Token"
          name="currency"
          options={currencies}
          validate={required}/>

        <Field
          component={RenderPaymentPassword}
          label="Payment password"
          name="paymentPassword"
          type="password"
          fill
          validate={paymentPasswordValidate}/>

        {extend
          ? (
            <div>
              <Field
                component={RenderSlider}
                min={0}
                max={64000}
                stepSize={1000}
                labelStepSize={64000}
                renderLabel={(val) => (val >= 1000 ? (`${val / 1000}K`) : val)}
                label="Gas amount"
                name="gasAmount"
                type="text"/>

              <Field
                component={RenderNumber}
                min={1}
                label="Gas price"
                name="gasPrice"
                type="text"/>
            </div>
          )
          : null}

        <div className={s.buttons}>
          {!extend
            ? (
              <Button
                type="submit"
                intent={Intent.PRIMARY}
                className="pt-minimal"
                onClick={() => this.setState({ extend: true })}
                text="Show me more options..."/>
            )
            : null}

          <Button
            type="submit"
            intent={Intent.PRIMARY}
            text="Submit"
            disabled={invalid}
            loading={fetching}/>
        </div>
      </form>
    );
  }
}

const FormComponent = reduxForm({
  form: 'transferFunds',
  enableReinitialize: true,
  initialValues: {
    from: '',
    to: '',
    amount: '',
    currency: '',
    gasAmount: '',
    gasPrice: '',
    paymentPassword: ''
  }
})(TransferFundsForm);

export default FormComponent;
