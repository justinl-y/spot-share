import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Bookings = new Mongo.Collection('bookings');

if (Meteor.isServer) {
  Meteor.publish('bookings', function bookingsPublication() {
    // return Bookings.find({ user_id: this.userId });
    return Bookings.find();
  });
}

// to do add meteor methods
