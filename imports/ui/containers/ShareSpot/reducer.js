import {
    LOADING_SPOTS_BEGIN,
    LOADING_SPOTS_END,
    UPDATE_SPOTS,
  } from './actions';

// intial state
const shareSpotsInitialState = {
  loadingResource: false,
  parkingSpots: [],
};

// reducer
export default (state = shareSpotsInitialState, action) => {
  switch (action.type) {
    case LOADING_SPOTS_BEGIN:
      return { ...state, loadingResource: true };
    case LOADING_SPOTS_END:
      return { ...state, loadingResource: false };
    case UPDATE_SPOTS:
      return { ...state, parkingSpots: action.payload };
    default:
      return state;
  }
};
