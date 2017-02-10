import React from 'react';

const styles = {
  'not-found': {
    height: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const NotFound = () => (
  <div style={styles['not-found']}>
    <h1>404.. This page is not found!</h1>
  </div>
);

export default NotFound;
