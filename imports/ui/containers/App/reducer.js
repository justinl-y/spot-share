import {
    CHANGE_LOCATION,
  } from './actions';

// intial state
const locationInitialState = {
  applicationLocation: 'HOME',
};

// reducers
export default (state = locationInitialState, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return { ...state, applicationLocation: action.payload };
    default:
      return state;
  }
};
