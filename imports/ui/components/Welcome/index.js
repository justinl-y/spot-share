import React from 'react';

const styles = {
  welcome: {
    height: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Welcome = () => (
  <div style={styles.welcome}>
    <h1>Rent-A-Spot Is Alive</h1>
  </div>
);

export default Welcome;
