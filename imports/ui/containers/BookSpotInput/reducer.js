import {
  ADD_BOOKING_SPOT,
  EDIT_BOOKING_SPOT,
} from './actions';

// intial state
const bookSpotsInputInitialState = {
  inputType: 'ADD',
  id: undefined,
};

// reducer
export default (state = bookSpotsInputInitialState, action) => {
  switch (action.type) {
    case ADD_BOOKING_SPOT:
      return { ...state, inputType: 'ADD', id: undefined };
    case EDIT_BOOKING_SPOT:
      return { ...state, inputType: 'EDIT', id: action.payload };
    default:
      return state;
  }
};
