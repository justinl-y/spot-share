import { Meteor } from 'meteor/meteor';

// action types
export const FILTER_BOOKING_SPOT = 'FILTER_BOOKING_SPOT';

// action creators
export const filterBookingSpot = item => ({
  type: FILTER_BOOKING_SPOT,
  payload: item,
});

// functions
export function deleteBookingSpot(id) {
  return () => {
    Meteor.call('deleteBookingSpot', id);
  };
}
