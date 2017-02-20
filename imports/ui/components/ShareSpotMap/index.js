import React, { Component, PropTypes } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import blueIcon from '../../containers/MapContainer/blueIcon'


const ShareGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={13}
    center={props.center}
  >
    <Marker
      position={new google.maps.LatLng(props.marker.lat, props.marker.lng)}
      icon={blueIcon}
    />
  </GoogleMap>
));

class ShareSpotMap extends Component {

  render() {

    // console.log('I be in the ShareSpotMap!', this.props.position)

    return (
      <ShareGoogleMap
        containerElement={
          <div style={{ height: '316px', marginTop: '20px' }} />
        }
        mapElement={
          <div style={{ height: '100%' }} />
        }
        marker={this.props.position}
        center={this.props.center}
      />
    );
  }
}

ShareSpotMap.propTypes = {
  position: PropTypes.object.isRequired,
  center: PropTypes.object.isRequired,
};

export default ShareSpotMap;
