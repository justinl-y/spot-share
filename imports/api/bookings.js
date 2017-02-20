import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Bookings = new Mongo.Collection('bookings');

if (Meteor.isServer) {
  Meteor.publish('getBookings', function bookingsPublication() {
    return Bookings.find();
  });
}

Meteor.methods({
  insertBookingSpot(booking) {
    console.log(booking);

    const insert = Bookings.insert({
      user_id: Meteor.userId(),
      parking_spot_id: 'BT5WGoGqrQzcX2Qrx', // booking.parkingSpotId, TODO add this from parking spot data
      date_booked: booking.dateBooked.toString(),
      time_booked: booking.timeBooked.toString(),
      duration: Number(booking.duration),
      // pricePerHour: booking.pricePerHour,  // TODO add this from parking spot data
      booking_cost: Number(booking.bookingCost),
    });

    console.log('Inserted Booking');
    return insert;
  },
  deleteBookingSpot(id) {
    // check permissions
    if (!this.userId) {
      throw new Meteor.Error('Not-Authorised');
    }

    // data validataion
    new SimpleSchema({
      id: { type: String },
    }).validate({ id });

    const remove = Bookings.remove({
      _id: id,
    });

    console.log('Booking Deleted');
    return remove;
  },
  updateBookingSpot(booking) {
    // check permissions
    /* if (!this.userId) {
      throw new Meteor.Error('Not-Authorised');
    }

    // data validataion
    new SimpleSchema({
      id: { type: String },
    }).validate({ id });*/

    const update = Bookings.update(
      { _id: booking._id },
      {
        $set: {
          parking_spot_id: 'BT5WGoGqrQzcX2Qrx', // booking.parkingSpotId, TODO add this from parking spot data
          date_booked: booking.dateBooked.toString(),
          time_booked: booking.timeBooked.toString(),
          duration: Number(booking.duration),
          // price_per_hour: Number(booking.pricePerHour), TODO add this from parking spot data
          booking_cost: Number(booking.bookingCost),
        },
      });

    console.log('Updated Booking');
    return update;
  },
});
