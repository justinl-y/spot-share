import { Meteor } from 'meteor/meteor';

// action types
export const FILTER_PARKING_SPOT = 'FILTER_PARKING_SPOT';

// action creators
export const filterParkingSpot = item => ({
  type: FILTER_PARKING_SPOT,
  payload: item,
});

// functions
export function deleteParkingSpot(id) {
  console.log('delete');
  return () => {
    Meteor.call('deleteParkingSpot', id);
  };
}
