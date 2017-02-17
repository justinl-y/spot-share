import React, { PropTypes } from 'react';

const styles = {
  'not-found': {
    height: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Booking = ({ duration }) => (
  <div style={styles['not-found']}>
    <h1> Booking ID: {duration} </h1>
  </div>
);


export default Booking;
