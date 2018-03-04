import React from 'react';
import { Link } from 'react-router-dom';

import SignInForm from '../SignInForm';

import namedRoutes from '../../../routes';
import s from './styles.css';

const SignIn = () => (
  <div className={s.container}>
    <div className={s.form}>
      <SignInForm/>
    </div>
    <div className={s.fp}>
      <Link to={namedRoutes.resetPassword}>Forgot password?</Link>
    </div>
    <div className={s.bottomLink}>
      Not have an account?{' '}
      <Link to={namedRoutes.signUp}>Sign up!</Link>
    </div>
  </div>
);

export default SignIn;
