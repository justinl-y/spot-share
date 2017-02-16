// import { getJSON, postJSON } from '../../lib/fetch-json';

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
  // const loginString = JSON.stringify(login);

  return (dispatch) => {
    // dispatch(loadResource());
    // postJSON('http://localhost:8000/auth/login', loginString).then((result) => {
      // dispatch(updateLogin(result));
      // dispatch(doneLoading());
    //});
  };
};

export const userLogout = () => {
  return (dispatch) => {
    // dispatch(loadResource());
    // getJSON('http://localhost:8000/auth/logout').then((result) => {
      // dispatch(updateLogin(result));
      // dispatch(doneLoading());
    // });
  };
};

export const registerUser = (register) => {
  const loginString = JSON.stringify(register);

  return (dispatch) => {
    // dispatch(loadResource());
    // postJSON('http://localhost:8000/auth/register', loginString).then((result) => {
      // dispatch(userSignUpLogin(result));
      // dispatch(doneLoading());
    // });
  };
};
