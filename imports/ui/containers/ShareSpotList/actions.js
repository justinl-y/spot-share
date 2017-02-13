import { Meteor } from 'meteor/meteor';

// action types
export const EDIT_PARKING_SPOT = 'EDIT_PARKING_SPOT';

// action creators
export const editParkingSpot = item => ({
  type: EDIT_PARKING_SPOT,
  payload: item,
});

// functions
export default function addParkingSpot(parkingSpot) {
  return () => {
    Meteor.call('addParkingSpot', parkingSpot);
  };
}
