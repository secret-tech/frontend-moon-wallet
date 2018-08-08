import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';

import { initSignUp, verifySignUp } from '../../../redux/modules/auth/signUp';

import SignUpForm from '../../../components/auth/SignUpForm';
import VerifySignUpForm from '../../../components/auth/VerifySignUpForm';

import * as routes from '../../../routes';
import s from './styles.css';

const SignUp = (props) => {
  const {
    t,
    step,
    fetching,
    verification: {
      verificationId,
      method
    }
  } = props;

  const qp = queryString.parse(props.location.search);

  const renderStep = (s) => {
    if (qp.verificationId && qp.code) {
      return (
        <VerifySignUpForm
          onSubmit={verifySignUp}
          fetching={fetching}
          initialValues={{
            verification: {
              verificationId: qp.verificationId,
              code: qp.code
            }
          }}/>
      );
    }

    if (s === 'initSignUp') {
      return (
        <SignUpForm
          onSubmit={initSignUp}
          fetching={fetching}/>
      );
    }

    return (
      <VerifySignUpForm
        onSubmit={verifySignUp}
        fetching={fetching}
        method={method}
        initialValues={{
          verification: { verificationId }
        }}/>
    );
  };

  return (
    <div className={s.container}>
      <div className={s.form}>
        {renderStep(step)}
      </div>
      <div className={s.bottomLink}>
        {t('auth:signUp.alreadyHaveAccount')}{' '}
        <Link to={routes.SIGN_IN}>{t('auth:signUp.signIn')}</Link>
      </div>
    </div>
  );
};

const ComponentWithRouter = withRouter(SignUp);
const TranslatedComponent = translate(['auth'])(ComponentWithRouter);
export default connect((state) => ({
  ...state.auth.signUp
}))(TranslatedComponent);
