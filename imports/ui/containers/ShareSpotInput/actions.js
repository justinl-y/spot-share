import { Meteor } from 'meteor/meteor';

// functions
export function addParkingSpot(parkingSpot) {
  return () => {
    Meteor.call('addParkingSpot', parkingSpot);
  };
}

export function updateParkingSpot(parkingSpot) {
  return () => {
    Meteor.call('updateParkingSpot', parkingSpot);
  };
}
