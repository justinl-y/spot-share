import {
  SIGN_IN,
  SIGN_UP,
  SIGN_UP_SIGN_IN,
  SIGN_OUT,
} from './actions';

const processLoginPageInitialState = {
  login: false,
  signup: false,
  userId: 0,
};

// reducer
export default (state = processLoginPageInitialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      let login = false;

      if (action.payload.success) {
        login = true;
      }

      console.log(action.payload.message);

      return { ...state, login, userId: action.payload.userId };
    }
    case SIGN_UP:
      return { ...state, signup: true };
    case SIGN_UP_SIGN_IN: {
      let login = false;

      if (action.payload.success) {
        login = true;
      }

      console.log(action.payload.message);

      return { ...state, login, signup: false, userId: action.payload.userId };
    }
    case SIGN_OUT: {
      const login = false;

      console.log(action.payload.message);

      return { ...state, login };
    }
    default:
      return state;
  }
};
