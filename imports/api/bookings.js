import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Bookings = new Mongo.Collection('bookings');

if (Meteor.isServer) {
  Meteor.publish('bookings', function bookingsPublication() {
    // return Bookings.find({ user_id: this.userId });
    return Bookings.find();
  });
}

Meteor.methods({
  insertBooking(booking) {
    const insert = bookings.insert({
      user_id: 'L58QnShYsYheWYMPy',
      parking_spot_id: booking.parkingSpotId,
      date_booked: booking.dateBooked,
      time_booked: booking.timeBooked,
      duration: booking.duration,
      booking_cost: booking.bookingCost,
    });
    console.log('Inserted');
    return insert;
  },
});

// to do add meteor methods
