import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, SearchBox } from 'react-google-maps';

const styles = {
  welcome: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
};

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    style={{ height: `100%`, width: '100%' }}
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
  </GoogleMap>
));

export default class mapContainer extends Component {
  render() {
    return (
      <div style={styles.welcome}>
        <SimpleMapExampleGoogleMap
          containerElement={
            <div style={{ height: `100%`, width: '100%' }} />
          }
          mapElement={
            <div style={{ height: `100%`, width: '100%' }} />
          }
        />
      </div>
    );
  }
}
