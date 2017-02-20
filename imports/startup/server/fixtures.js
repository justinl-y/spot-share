import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { ParkingSpots } from '../../api/parking-spots';
import { Bookings } from '../../api/bookings';

Meteor.startup(() => {
  let user1 = {};
  let user2 = {};

  if (Meteor.users.find().count() === 0) {
    user1 = Accounts.createUser({
      email: 'bob@bob.com',
      password: '123456',
    });

    user2 = Accounts.createUser({
      email: 'bill@bill.com',
      password: '123456',
    });
  }

  if (ParkingSpots.find().count() === 0) {
    ParkingSpots.insert({
      user_id: user1,
      address: '34 Flibble Street',
      post_code: 'V3Z7W3',
      geolocation: {
        lat: 49.2634011,
        lng: -123.1382246,
      },
      available_from: '2016-12-01',
      available_to: '2017-11-30',
      price_per_hour: 25,
      additional_information: 'Mostly a safe area although there is a chance you will be murdered. Oh yeah.',
      showInfo: false,
    });
    ParkingSpots.insert({
      user_id: user1,
      address: '5680 Pacific Boulevard',
      post_code: 'V5H8U3',
      geolocation: {
        lat: 49.2819163,
        lng: -123.1083174,
      },
      available_from: '2016-12-01',
      available_to: '2017-11-30',
      price_per_hour: 15,
      additional_information: 'Rough as rats. You have been warned.',
      showInfo: false,
    });
    ParkingSpots.insert({
      user_id: user1,
      address: '6091 Imperial Street',
      post_code: 'dgdgdgdfg',
      geolocation: {
        lat: 49.222285,
        lng: -122.974828,
      },
      available_from: 'Fri Feb 10 2017 00:00:00 GMT-0800 (PST)',
      available_to: 'Tue Feb 28 2017 00:00:00 GMT-0800 (PST)',
      price_per_hour: 1,
      additional_information: 'Cheap as it is Burnaby. You have been warned.',
      showInfo: false,
    });
    ParkingSpots.insert({
      user_id: user2,
      address: '1910 West 6th Avenue, Vancouver, BC, Canada',
      post_code: 'V6J1R7',
      geolocation: {
        lat: 49.2663482,
        lng: -123.148374,
      },
      available_from: 'Sun Feb 19 2017 00:00:00 GMT-0800 (PST)',
      available_to: 'Tue Feb 28 2017 00:00:00 GMT-0800 (PST)',
      price_per_hour: 40,
      additional_information: 'No murder here.',
      showInfo: false,
    });
    ParkingSpots.insert({
      user_id: user2,
      address: '16 Hereford Road, London W5 4SE, United Kingdom',
      post_code: 'W5 4SE',
      geolocation: {
        lat: 51.4993343,
        lng: -0.31011349,
      },
      available_from: 'Thu Feb 23 2017 00:00:00 GMT-0800 (PST)',
      available_to: 'Tue Feb 28 2017 00:00:00 GMT-0800 (PST)',
      price_per_hour: 20,
      additional_information: null,
    });
    ParkingSpots.insert({
      user_id: user2,
      address: 'Burrard Street',
      post_code: 'V6Z4R7',
      geolocation: {
        lat: 49.2827291,
        lng: -123.1207375,
      },
      available_from: 'Mon Feb 20 2017 00:00:00 GMT-0800 (PST)',
      available_to: 'Tue Feb 21 2017 00:00:00 GMT-0800 (PST)',
      price_per_hour: 25,
      additional_information: 'Nice spot for a bit of shopping.',
      showInfo: false,
    });
  }

  const parkingSpot = ParkingSpots.findOne();

  if (Bookings.find().count() === 0) {
    Bookings.insert({
      user_id: user2,
      parking_spot_id: parkingSpot,
      address: '5680 Pacific Boulevard',
      post_code: 'V5H8U3',
      price_per_hour: 15,
      date_booked: 'Sun Feb 19 2017 00:00:00 GMT-0800 (PST)',
      time_booked: 'Sun Feb 19 2017 12:30:43 GMT-0800 (PST)',
      duration: 4,
      booking_cost: 60,
    });
    Bookings.insert({
      user_id: user2,
      parking_spot_id: parkingSpot,
      address: '5680 Pacific Boulevard',
      post_code: 'V5H8U3',
      price_per_hour: 15,
      date_booked: 'Sun Feb 19 2017 00:00:00 GMT-0800 (PST)',
      time_booked: 'Sun Feb 19 2017 12:30:43 GMT-0800 (PST)',
      duration: 4,
      booking_cost: 60,
    });
    Bookings.insert({
      user_id: user2,
      parking_spot_id: parkingSpot,
      address: '5680 Pacific Boulevard',
      post_code: 'V5H8U3',
      price_per_hour: 15,
      date_booked: '"Tue Feb 21 2017 00:00:00 GMT-0800 (PST)"',
      time_booked: '"Sun Feb 19 2017 12:25:12 GMT-0800 (PST)"',
      duration: 4,
      booking_cost: 60,
    });
    Bookings.insert({
      user_id: user2,
      parking_spot_id: parkingSpot,
      address: '5680 Pacific Boulevard',
      post_code: 'V5H8U3',
      price_per_hour: 15,
      date_booked: 'Wed Feb 22 2017 00:00:00 GMT-0800 (PST)',
      time_booked: 'Sun Feb 19 2017 18:00:56 GMT-0800 (PST)',
      duration: 4,
      booking_cost: 60,
    });
    Bookings.insert({
      user_id: user1,
      parking_spot_id: parkingSpot,
      address: '1009 Expo Boulevard',
      post_code: 'V8I8P6',
      price_per_hour: 25,
      date_booked: 'Tue Feb 21 2017 00:00:00 GMT-0800 (PST)',
      time_booked: 'Sun Feb 19 2017 14:01:38 GMT-0800 (PST)',
      duration: 9,
      booking_cost: 225,
    });
    Bookings.insert({
      user_id: user2,
      parking_spot_id: parkingSpot,
      address: '5680 Pacific Boulevard',
      post_code: 'V5H8U3',
      price_per_hour: 15,
      date_booked: 'Sun Feb 26 2017 00:00:00 GMT-0800 (PST)',
      time_booked: 'Sun Feb 19 2017 12:01:40 GMT-0800 (PST)',
      duration: 5,
      booking_cost: 75,
    });
  }
});
