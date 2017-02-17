import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ParkingMap = new Mongo.Collection('parking_map');

if (Meteor.isServer) {
  Meteor.publish('parking_map', function mapPublication() {
    // return Bookings.find({ user_id: this.userId });
    return ParkingMap.find();
  });
}