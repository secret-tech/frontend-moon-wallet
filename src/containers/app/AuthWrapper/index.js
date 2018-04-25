import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Topbar from '../../app/Topbar';
import SignIn from '../../auth/SingIn';
import SignUp from '../../auth/SignUp';
import ResetPassword from '../../auth/ResetPassword';

import * as routes from '../../../routes';
import s from './styles.css';

class AuthWrapper extends Component {
  render() {
    return (
      <div className={s.auth}>
        <Topbar/>
        <div className={s.logo}>
          <img src={require('../../../assets/images/logo.svg')}/>
        </div>
        <Switch>
          <Route exact path={routes.SIGN_IN} component={SignIn}/>
          <Route exact path={routes.SIGN_UP} component={SignUp}/>
          <Route exact path={routes.RESET_PASSWORD} component={ResetPassword}/>
          <Redirect from="*" to={routes.SIGN_IN}/>
        </Switch>
      </div>
    );
  }
}


const ComponentWithRouter = withRouter(AuthWrapper);
export default ComponentWithRouter;
