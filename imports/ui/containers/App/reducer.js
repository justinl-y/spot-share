import {
    SET_LOCATION,
  } from './actions';

// intial state
const locationInitialState = {
  applicationLocation: '',
};

// reducers
export default (state = locationInitialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, applicationLocation: action.payload };
    default:
      return state;
  }
};
