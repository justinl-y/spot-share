// action types
export const SET_LOCATION = 'SET_LOCATION';

// action creators
export const setApplicationLocation = location => ({
  type: SET_LOCATION,
  payload: location,
});
