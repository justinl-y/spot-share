import { Meteor } from 'meteor/meteor';

// action types
export const FILTER_PARKING_SPOT = 'FILTER_PARKING_SPOT';
// export const EDIT_PARKING_SPOT = 'EDIT_PARKING_SPOT';

// action creators
export const filterParkingSpot = item => ({
  type: FILTER_PARKING_SPOT,
  payload: item,
});

/* export const editParkingSpot = id => ({
  type: EDIT_PARKING_SPOT,
  payload: id,
});*/

// functions
export function deleteParkingSpot(id) {
  return () => {
    Meteor.call('deleteParkingSpot', id);
  };
}
