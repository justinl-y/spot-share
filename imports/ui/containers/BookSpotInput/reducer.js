import {
  ADD_BOOKING_SPOT,
  EDIT_BOOKING_SPOT,
} from './actions';

// intial state
const bookSpotsInputInitialState = {
  inputType: 'ADD',
  id: undefined,
  parkingSpotId: undefined,
  originalLocation: undefined,
};

// reducer
export default (state = bookSpotsInputInitialState, action) => {
  switch (action.type) {
    case ADD_BOOKING_SPOT:
      if (action.payload === undefined) {
        return { ...state, inputType: 'ADD', id: action.payload, parkingSpotId: undefined, originalLocation: undefined };
      } else {
        return { ...state, inputType: 'ADD', parkingSpotId: action.payload.parkingSpotId, originalLocation: action.payload.originalLocation };
      }
    case EDIT_BOOKING_SPOT:
      return { ...state, inputType: 'EDIT', id: action.payload, parkingSpotId: undefined, originalLocation: undefined };
    default:
      return state;
  }
};
