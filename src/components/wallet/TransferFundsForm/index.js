import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { required } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';
import RenderSelect from '../../_forms/RenderSelect';

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
      fetching
    } = this.props;

    const { extend } = this.state;

    return (
      <form onSubmit={handleSubmit}>

        <Field
          component={RenderInput}
          label="Recepient address"
          name="recepient"
          type="text"
          validate={required}/>

        <Field
          component={RenderInput}
          label="Amount"
          name="amount"
          type="text"
          validate={required}/>

        <Field
          component={RenderSelect}
          label="Token"
          name="token"
          options={[
            { label: 'Select token...', value: '' },
            { label: 'Ethereum', value: 'ETH' },
            { label: 'Jincor Token', value: 'JCR' },
            { label: 'XNN Token', value: 'XNN' }
          ]}
          validate={required}/>

        {extend
          ? (
            <div>
              <Field
                component={RenderInput}
                label="Gas price"
                name="gasPrice"
                type="text"
                validate={required}/>

              <Field
                component={RenderInput}
                label="Gas amount"
                name="gasAmount"
                type="text"
                validate={required}/>
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
  initialValues: {
    wallet: '',
    recepient: '',
    amount: '',
    token: '',
    gasAmount: 5,
    gasPrice: 21000
  }
})(TransferFundsForm);

export default FormComponent;
