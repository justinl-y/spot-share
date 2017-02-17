import { Meteor } from 'meteor/meteor';

// action type
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SIGN_IN = 'SIGN_UP_SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// action creator
const updateSignIn = result => ({
  type: SIGN_IN,
  payload: result,
});

export const updateSignUp = () => ({
  type: SIGN_UP,
  payload: null,
});

const updateSignUpSignIn = result => ({
  type: SIGN_UP_SIGN_IN,
  payload: result,
});

const updateSignOut = result => ({
  type: SIGN_OUT,
  payload: result,
});

export const userSignIn = (login) => {
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

      dispatch(updateSignIn(result));
    });
  };
};

export const userSignUpSignIn = (register) => {
  return (dispatch) => {
    Accounts.createUser(register, (error) => {
      const result = {};

      if (error) {
        result.success = false;
        result.message = `Sign Up Unsucessful: ${error.reason}`;
      } else {
        Meteor.loginWithPassword(register.email, register.password, (err) => {
          if (err) {
            result.success = false;
            result.message = `Sign Up, Sign In Unsucessful: ${err.reason}`;
          } else {
            result.success = true;
            result.message = 'Sign Up, Sign In Successful';
          }

          dispatch(updateSignUpSignIn(result));
        });
      }
    });
  };
};

export const userSignOut = () => {
  return (dispatch) => {
    Meteor.logout((error) => { 
      const result = {};

      if (error) {
        result.success = false;
        result.message = `Sign out unsucessful: ${error.reason}`;
      } else {
        result.success = true;
        result.message = 'Sign out successful';
      }

      dispatch(updateSignOut(result));
    });
  };
};
