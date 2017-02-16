import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import Login from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { userVerifyLogin, userSignUp, registerUser } from './actions';

class PostList extends Component {
  componentDidUpdate() {
    if (this.props.userLoggedIn) {
      // browserHistory.push('/menu');
      this.props.router.push('/menu');
    }
  }

  render() {
    const { userToSignUp } = this.props;

    return (
      <div>
        {
          !userToSignUp ?
            <Login
              onSignInClick={this.props.verifyLogin}
              onSignUpClick={this.props.signUpUser}
            />
          :
            <SignUp
              onSignUpSignInClick={this.props.signUpLogin}
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
  verifyLogin: (login) => {
    dispatch(userVerifyLogin(login));
  },
  signUpUser: () => {
    dispatch(userSignUp());
  },
  signUpLogin: (register) => {
    dispatch(registerUser(register));
  },
});

PostList.propTypes = {
  router: PropTypes.object.isRequired,
  userToSignUp: PropTypes.bool.isRequired,
  verifyLogin: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
  signUpLogin: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
