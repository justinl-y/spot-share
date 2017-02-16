import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

const styles = {
  mapContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  infoBox: {
    width: '200px',
    height: '300px',
  }
};

const ParkingGoogleMap = withGoogleMap(props => (
  <GoogleMap
    style={{ height: `100%`, width: '100%' }}
    defaultZoom={4}
    center={props.center}
  >
    {props.markers.map((marker, index) => (
      <Marker
        key={index}
        position={new google.maps.LatLng(marker.lat, marker.long)}
        onClick={() => props.onMarkerClick(marker)}
      >
        {/*
          Show info window only if the 'showInfo' key of the marker is true.
          That is, when the Marker pin has been clicked and 'onCloseClick' has been
          Successfully fired.
        */}
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div style={styles.infoBox}>
              <h2>{marker.title}</h2>
              <p>Price per hour: {marker.price}</p>
              <p>{marker.description}</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

export default class mapContainer extends Component {

  state = {
    center: {
      lat: -25.363882,
      lng: 131.044922,
    },

    // array of objects of markers
    markers: [
      {
        lat: -27.363882,
        long: 137.044922,
        showInfo: false,
        title: 'Red Academy',
        price: 15,
        description: 'Nothing of interest.'
      },
      {
        lat: -23.363882,
        long: 129.044922,
        showInfo: false,
        title: 'BCIT',
        price: 15,
        description: 'Nothing of interest.'
      },
    ],
  };

  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  render() {
    return (
      <div style={styles.mapContainer}>
        <ParkingGoogleMap
          containerElement={
            <div style={{ height: `100%`, width: '100%' }} />
          }
          mapElement={
            <div style={{ height: `100%`, width: '100%' }} />
          }
          center={this.state.center}
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
        />
      </div>
    );
  }
}
