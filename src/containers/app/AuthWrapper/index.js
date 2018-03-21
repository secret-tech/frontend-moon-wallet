import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignIn from '../../auth/SingIn';
import SignUp from '../../auth/SignUp';
import ResetPassword from '../../auth/ResetPassword';

import s from './styles.css';

class AuthWrapper extends Component {
  render() {
    return (
      <div className={s.auth}>
        <div className={s.logo}>
          <img src={require('../../../assets/images/logo.svg')}/>
        </div>
        <Switch>
          <Route exact path="/auth/sign-in" component={SignIn}/>
          <Route exact path="/auth/sign-up" component={SignUp}/>
          <Route exact path="/auth/reset-password" component={ResetPassword}/>
          <Redirect from="*" to="/auth/sign-in"/>
        </Switch>
      </div>
    );
  }
}

// const ConnectedComponent = connect(null)(Auth);
// const ComponentWithRouter = withRouter(ConnectedComponent);
export default AuthWrapper;
