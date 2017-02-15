import {
    FILTER_PARKING_SPOT,
  } from './actions';

// intial state
const shareSpotListInitialState = {
  visibilityFilter: 'ALL',
};

// reducer
export default (state = shareSpotListInitialState, action) => {
  switch (action.type) {
    case FILTER_PARKING_SPOT:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
