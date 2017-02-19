import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { userSignIn, updateSignUp, userSignUpSignIn, signUpCancel } from './actions';

class ProcessLogin extends Component {
  componentDidUpdate() {
    if (this.props.userLoggedIn) {
      this.props.router.push('/');
    }
  }

  render() {
    const { userToSignUp } = this.props;

    return (
      <div>
        {
          !userToSignUp ?
            <Login
              onSignInClick={this.props.signIn}
              onSignUpClick={this.props.signUp}
            />
          :
            <SignUp
              onSignUpSignInClick={this.props.signUpSignIn}
              onSignUpCancelClick={this.props.signUpCancel}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLoggedIn: state.appData.processLogin.login,
  userToSignUp: state.appData.processLogin.signup,
});

const mapDispatchToProps = dispatch => ({
  signIn: (login) => {
    dispatch(userSignIn(login));
  },
  signUp: () => {
    dispatch(updateSignUp());
  },
  signUpSignIn: (register) => {
    dispatch(userSignUpSignIn(register));
  },
  signUpCancel: () => {
    dispatch(signUpCancel());
  },
});

ProcessLogin.propTypes = {
  router: PropTypes.object.isRequired,
  userToSignUp: PropTypes.bool.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  signUpSignIn: PropTypes.func.isRequired,
  signUpCancel: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProcessLogin);
