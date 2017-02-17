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
    const insert = Bookings.insert({
      user_id: booking.user_id,
      parking_spot_id: booking.parkingSpotId,
      date_booked: booking.dateBooked,
      time_booked: booking.timeBooked,
      duration: booking.duration,
      booking_cost: booking.bookingCost,
    });
    return insert;
  },
  updateBooking(booking) {
    const update = Bookings.update(
      { _id: booking._id },
      {
        $set: {
          user_id: booking.user_id,
          parking_spot_id: booking.parkingSpotId,
          date_booked: booking.dateBooked,
          time_booked: booking.TimeBooked,
          duration: booking.duration,
          booking_cost: booking.bookingCost,
        },
      });
    return update;
  },
});
