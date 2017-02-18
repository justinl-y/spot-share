import { Meteor } from 'meteor/meteor';

// action types
export const ADD_BOOKING_SPOT = 'ADD_BOOKING_SPOT';
export const EDIT_BOOKING_SPOT = 'EDIT_BOOKING_SPOT';

// action creators
export const addBookingSpot = () => ({
  type: ADD_BOOKING_SPOT,
  payload: null,
});

export const editBookingSpot = id => ({
  type: EDIT_BOOKING_SPOT,
  payload: id,
});

// functions
export function insertBookingSpot(bookingSpot) {
  return () => {
    Meteor.call('insertBookingSpot', bookingSpot);
  };
}

export function updateBookingSpot(bookingSpot) {
  return () => {
    Meteor.call('updateBookingSpot', bookingSpot);
  };
}
