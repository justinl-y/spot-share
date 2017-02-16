import { Meteor } from 'meteor/meteor';

// action type
export const USER_SIGN_UP = 'USER_SIGN_UP';
export const SIGN_UP_LOGIN = 'SIGN_UP_LOGIN';
export const UPDATE_LOGIN = 'UPDATE_LOGIN';

// action creator
export const userSignUp = () => ({
  type: USER_SIGN_UP,
  payload: null,
});

export const userSignUpLogin = result => ({
  type: SIGN_UP_LOGIN,
  payload: result,
});

const updateLogin = result => ({
  type: UPDATE_LOGIN,
  payload: result,
});

export const userVerifyLogin = (login) => {
  return (dispatch) => {
    Meteor.loginWithPassword(login.email, login.password, (error) => {
      const result = {};
      if (error) {
        result.success = false;
        result.message = `Sign In Unsucessful: ${error.reason}`;
      } else {
        result.success = true;
        result.message = 'Sign In Successful';
      }

      dispatch(updateLogin(result));
    });

    // dispatch(loadResource());
    // postJSON('http://localhost:8000/auth/login', loginString).then((result) => {
      // dispatch(updateLogin(result));
      // dispatch(doneLoading());
    // });
  };
};

export const userLogout = () => {
  console.log('sign out');

  return (dispatch) => {
    // dispatch(loadResource());
    // getJSON('http://localhost:8000/auth/logout').then((result) => {
      // dispatch(updateLogin(result));
      // dispatch(doneLoading());
    // });
  };
};

export const registerUser = (register) => {
  // const loginString = JSON.stringify(register);

  console.log('register user');

  return (dispatch) => {
    // dispatch(loadResource());
    // postJSON('http://localhost:8000/auth/register', loginString).then((result) => {
      // dispatch(userSignUpLogin(result));
      // dispatch(doneLoading());
    // });
  };
};
