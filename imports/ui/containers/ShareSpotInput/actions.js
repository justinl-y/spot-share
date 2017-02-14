import { Meteor } from 'meteor/meteor';

// functions
export function addParkingSpot(parkingSpot) {
  return () => {
    Meteor.call('addParkingSpot', parkingSpot);
  };
}

export function editParkingSpot(parkingSpot) {
  return () => {
    Meteor.call('editParkingSpot', parkingSpot);
  };
}
