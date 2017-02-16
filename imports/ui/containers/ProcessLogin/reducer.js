import {
  USER_SIGN_UP,
  SIGN_UP_LOGIN,
  UPDATE_LOGIN,
} from './actions';

const processLoginPageInitialState = {
  login: false,
  signup: false,
  userId: 0,
};

// reducer
export default (state = processLoginPageInitialState, action) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return { ...state, signup: true };
    case SIGN_UP_LOGIN: {
      let login = false;

      if (action.payload.response) {
        login = true;
      }

      return { ...state, login, signup: false, userId: action.payload.userId };
    }
    case UPDATE_LOGIN: {
      let login = false;

      if (action.payload.success) {
        login = true;
      }

      console.log(action.payload.message);

      return { ...state, login, userId: action.payload.userId };
    }
    default:
      return state;
  }
};
