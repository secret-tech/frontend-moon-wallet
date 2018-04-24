import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { ButtonGroup, Button, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import classnames from 'classnames/bind';

import { changeTheme } from '../../../redux/modules/app/theme';

import SignIn from '../../auth/SingIn';
import SignUp from '../../auth/SignUp';
import ResetPassword from '../../auth/ResetPassword';

import * as routes from '../../../routes';
import { THEMES } from '../../../utils/theme';
import s from './styles.css';

class AuthWrapper extends Component {
  render() {
    const {
      theme,
      changeTheme
    } = this.props;

    return (
      <div className={s.auth}>
        <div className={s.topbar}>
          <div>
            <a
              href="https://moonwallet.tech"
              className="pt-button pt-minimal"
              tabIndex="0">
              <Icon icon={IconNames.CHEVRON_LEFT} />
              <span>Back to landing page</span>
            </a>
          </div>

          <div>
            <ButtonGroup large={false}>
              <Button
                icon="moon"
                text="Dark theme"
                className={classnames(theme === THEMES.dark ? 'pt-active' : null, 'pt-minimal')}
                onClick={() => changeTheme(THEMES.dark)}/>

              <Button
                icon="flash"
                text="Light theme"
                className={classnames(theme === THEMES.light ? 'pt-active' : null, 'pt-minimal')}
                onClick={() => changeTheme(THEMES.light)}/>
            </ButtonGroup>
          </div>
        </div>
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

const ConnectedComponent = connect(
  (state) => ({ ...state.app.theme }),
  {
    changeTheme
  }
)(AuthWrapper);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
