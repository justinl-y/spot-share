import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ParkingSpots } from '../../../api/parking-spots';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
import SearchBox from './lib/places/SearchBox';


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

const INPUT_STYLE = {
  boxSizing: `border-box`,
  MozBoxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  marginTop: `27px`,
  padding: `0 12px`,
  borderRadius: `1px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
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
        position={new google.maps.LatLng(marker.geolocation.lat, marker.geolocation.lng)}
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
              <h2>{marker.address}</h2>
              <p>Price per hour: {marker.price_per_hour}</p>
              <p>{marker.additional_information}</p>
              <p>{marker.showInfo}</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    ))}
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder="Customized your placeholder"
      inputStyle={INPUT_STYLE}
    />
  </GoogleMap>
));

class mapContainer extends Component {

  state = {
    bounds: null,
    center: {
      lat: -25.363882,
      lng: 131.044922,
    },
  };

  //These click/close events are for the Info Window
  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  //This handles the Search Box
  handleMapMounted = this.handleMapMounted.bind(this);
  handleBoundsChanged = this.handleBoundsChanged.bind(this);
  handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
  handlePlacesChanged = this.handlePlacesChanged.bind(this);

  handleMarkerClick(parkingSpot) {
    Meteor.call('handleMarkerClick', parkingSpot);
  }

  handleMarkerClose(parkingSpot) {
    Meteor.call('handleMarkerClose', parkingSpot);
  }

  //Functions for the Search Box events

  handleMapMounted(map) {
    this._map = map;
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter(),
    });
  }

  handleSearchBoxMounted(searchBox) {
    this._searchBox = searchBox;
  }

  handlePlacesChanged() {
    const places = this._searchBox.getPlaces();

    // Add a marker for each place returned from search bar
    const spot = places.map(place => ({
      position: place.geometry.location,
    }));

    // Set markers; set map center to first search result
    const mapCenter = spot.length > 0 ? spot[0].position : this.state.center;

    this.setState({
      center: mapCenter,
    });
  }

  render() {
    const parkingSpot = this.props.parkingSpotList
    return (
      <div style={styles.mapContainer}>
        <ParkingGoogleMap
          containerElement={
            <div style={{ height: `100%`, width: '100%' }} />
          }
          mapElement={
            <div style={{ height: `100%`, width: '100%' }} />
          }
          markers={parkingSpot}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
          center={this.state.center}
          onMapMounted={this.handleMapMounted}
          onBoundsChanged={this.handleBoundsChanged}
          onSearchBoxMounted={this.handleSearchBoxMounted}
          bounds={this.state.bounds}
          onPlacesChanged={this.handlePlacesChanged}
        />
      </div>
    );
  }
}

mapContainer.propTypes = {
  parkingSpotList: PropTypes.array.isRequired
};

const ShareSpaceContainer = createContainer(() => {
  Meteor.subscribe('getParkingSpots');
  return {
    parkingSpotList: ParkingSpots.find({}).fetch(),
  };
}, mapContainer);

export default ShareSpaceContainer
