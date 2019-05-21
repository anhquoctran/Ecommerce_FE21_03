import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { withFirebase } from '../../modules/firebase';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
  class withAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.LOGIN);
          }
        }
      )
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />
    }
  }
  return compose(
    withRouter,
    withFirebase
  )(withAuthorization);
};

export default withAuthorization;
