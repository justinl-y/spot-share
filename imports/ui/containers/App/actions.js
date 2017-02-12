// action types
export const CHANGE_LOCATION = 'CHANGE_LOCATION';

// action creators
export const changeApplicationLocation = location => ({
  type: CHANGE_LOCATION,
  payload: location,
});
