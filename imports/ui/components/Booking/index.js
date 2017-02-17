import React, { PropTypes } from 'react';

const styles = {
  component: {
    textAlign: 'center',
    listStyle: 'none',
  },
};

const Booking = ({ id, bookingCost, duration, parkingSpotId, dateBooked, timeBooked }) => (
  <li style={styles.component}>
    <h3> Booking ID: { id } </h3>
    <p> Duration: { duration } </p>
    <p> Booking Cost: { bookingCost } </p>
    <p> Parking Spot ID: { parkingSpotId } </p>
    <p> Date Booked: { dateBooked } </p>
    <p> Time Booked: { timeBooked } </p>
  </li>
);

Booking.propTypes = {
  id: PropTypes.string.isRequired,
};



export default Booking;
