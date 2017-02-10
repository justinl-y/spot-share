import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ParkingSpots = new Mongo.Collection('parking_spots');

if (Meteor.isServer) {
  Meteor.publish('parking-spots', function parkingSpotsPublication() {
    return ParkingSpots.find();
  });
}
