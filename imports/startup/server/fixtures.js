import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { ParkingSpots } from '../../api/parking-spots';
import { Bookings } from '../../api/bookings';

Meteor.startup(() => {
  let user1 = {};
  let user2 = {};

  if (Meteor.users.find().count() === 0) {
    user1 = Accounts.createUser({
      first_name: 'Bob',
      last_name: 'Bobby',
      email: 'bob@bob.com',
      password: '123456',
    });

    user2 = Accounts.createUser({
      first_name: 'Bill',
      last_name: 'Billy',
      email: 'bill@bill.com',
      password: '123456',
    });
  }

  if (ParkingSpots.find().count() === 0) {
    ParkingSpots.insert({
      user_id: user1,
      post_code: 'V3Z7W3',
      geolocation: { lat: -34.397, lng: 150.644 },
      image_encoding: 'sdsdfsfsfsfwrw',
      available_from: '2016-12-01',
      available_to: '2017-11-30',
      price_per_hour: 25.00,
      additional_information: 'Mostly a safe area although there is a chance you will be murdered. Oh yeah.',
    });
  }

  const parkingSpot = ParkingSpots.findOne();

  if (Bookings.find().count() === 0) {
    Bookings.insert({
      user_id: user2,
      parking_spot_id: parkingSpot._id,
      date_booked: '2017-02-01',
      time_booked: '13:00',
      duration: 2,
      booking_cost: 50,
    });
  }
});