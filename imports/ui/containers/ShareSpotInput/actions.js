import { Meteor } from 'meteor/meteor';

// action types
export const ADD_PARKING_SPOT = 'ADD_PARKING_SPOT';
export const EDIT_PARKING_SPOT = 'EDIT_PARKING_SPOT';

// action creators
export const addParkingSpot = () => ({
  type: ADD_PARKING_SPOT,
  payload: null,
});

export const editParkingSpot = id => ({
  type: EDIT_PARKING_SPOT,
  payload: id,
});

// functions
export function insertParkingSpot(parkingSpot) {
  return () => {
    Meteor.call('addParkingSpot', parkingSpot);
  };
}

export function updateParkingSpot(parkingSpot) {
  return () => {
    Meteor.call('updateParkingSpot', parkingSpot);
  };
}
