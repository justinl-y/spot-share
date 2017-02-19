import React, { PropTypes } from 'react';

const styles = {
  component: {
    textAlign: 'center',
    listStyle: 'none',
  },
};

const Booking = ({ id, userId, bookingCost, duration, parkingSpotId, dateBooked, timeBooked }) => (
  <li style={styles.component}>
    <h3>Booking ID: { id }</h3>
    <p>User ID: {userId} | Duration: { duration } | Booking Cost: { bookingCost } | Parking Spot ID: { parkingSpotId }</p>
    <p>Date Booked: { dateBooked } | Time Booked: { timeBooked }</p>
    <button onClick={(e) => { e.preventDefault(); console.log('Edit Clicked'); }}>Edit</button>
    <button onClick={(e) => { e.preventDefault(); console.log('Eliminate Charlie'); }}>Delete</button>
  </li>
);

Booking.propTypes = {
  id: PropTypes.string.isRequired,
  bookingCost: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  parkingSpotId: PropTypes.string.isRequired,
  dateBooked: PropTypes.string.isRequired,
  timeBooked: PropTypes.string.isRequired,
};

export default Booking;
