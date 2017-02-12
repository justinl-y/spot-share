import {
    SET_LOCATION,
  } from './actions';

// intial state
const locationInitialState = {
  userLocation: '',
};

// reducers
export default (state = locationInitialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, userLocation: action.payload };
    default:
      return state;
  }
};
