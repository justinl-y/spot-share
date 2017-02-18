import {
  SIGN_IN,
  SIGN_UP,
  SIGN_UP_SIGN_IN,
  SIGN_OUT,
  CLEAR_MESSAGE_TEXT,
} from './actions';

const processLoginPageInitialState = {
  login: false,
  signup: false,
  message: {},
};

// reducer
export default (state = processLoginPageInitialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      let login = false;
      const message = {};

      if (action.payload.success) {
        login = true;
      }

      // console.log(action.payload.message);
      message.text = action.payload.message;
      message.active = true;

      return { ...state, login, message };
    }
    case SIGN_UP:
      return { ...state, signup: true };
    case SIGN_UP_SIGN_IN: {
      let login = false;
      const message = {};

      if (action.payload.success) {
        login = true;
      }

      // console.log(action.payload.message);
      message.text = action.payload.message;
      message.active = true;

      return { ...state, login, signup: false, message };
    }
    case SIGN_OUT: {
      const login = false;
      const message = {};

      // console.log(action.payload.message);
      message.text = action.payload.message;
      message.active = true;

      return { ...state, login, message };
    }
    case CLEAR_MESSAGE_TEXT: {
      const messageActive = { active: false };

      return { ...state, message: { ...state.message, ...messageActive } };
    }
    default:
      return state;
  }
};

// this.setState({ fieldErrors: { ...this.state.fieldErrors, ...errorObject } });
