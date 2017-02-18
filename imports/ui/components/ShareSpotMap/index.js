import React, { Component, PropTypes } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const ShareGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={new google.maps.LatLng(-27.363882, 137.044922)} />
  </GoogleMap>
));

class ShareSpotMap extends Component {


  render() {

    console.log(this.props.position)

    return (
      <ShareGoogleMap
        containerElement={
          <div style={{ height: '200px' }} />
        }
        mapElement={
          <div style={{ height: '100%' }} />
        }
        marker={this.props.position}
      />
    );
  }
}

ShareSpotMap.propTypes = {
  position: PropTypes.object.isRequired,
};

export default ShareSpotMap;
