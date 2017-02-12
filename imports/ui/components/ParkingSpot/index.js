import React from 'react';

const styles = {
  welcome: {
    // height: '85vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    'text-align': 'center',
  },
  h1: {
    // 'text-align': 'center',
  },
};

const ParkingSpot = () => (
  <div style={styles.welcome}>
    <h1>A parking spot</h1>
  </div>
);

export default ParkingSpot;
