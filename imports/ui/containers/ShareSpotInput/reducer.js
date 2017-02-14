import {
  ADD_PARKING_SPOT,
  EDIT_PARKING_SPOT,
} from './actions';

// intial state
const shareSpotsInputInitialState = {
  inputType: 'ADD',
  id: undefined,
};

// reducer
export default (state = shareSpotsInputInitialState, action) => {
  switch (action.type) {
    case ADD_PARKING_SPOT:

      return { ...state, inputType: 'ADD', id: undefined };
    case EDIT_PARKING_SPOT:
      console.log(action.payload);

      return { ...state, inputType: 'EDIT', id: action.payload };
    default:
      return state;
  }
};
