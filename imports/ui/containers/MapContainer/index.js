import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ParkingSpots } from '../../../api/parking-spots';
import InfoBox from './../../components/InfoBox'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
import SearchBox from './lib/places/SearchBox';
import RaisedButton from 'material-ui/RaisedButton';
import blueIcon from './blueIcon';

//Styles for the mapContainer & intoBox
const styles = {
  mapContainer: {
    height: 'calc(100vh - 64px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
};

//Style for Search Box
const INPUT_STYLE = {
  boxSizing: `border-box`,
  MozBoxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  marginTop: `10px`,
  padding: `0 12px`,
  borderRadius: `1px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
};


//This renders Google Map
const ParkingGoogleMap = withGoogleMap(props => (
  <GoogleMap
    style={{ height: `100%`, width: '100%' }}
    defaultZoom={15}
    center={props.center}
  >
    {props.markers.map((marker, index) => (
      <Marker
        key={index}
        icon={blueIcon}
        position={new google.maps.LatLng(marker.geolocation.lat, marker.geolocation.lng)}
        onClick={() => props.onMarkerClick(marker)}
      >
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <InfoBox
              parkingSpotId={marker._id}
              address={marker.address}
              postal={marker.post_code}
              price={marker.price_per_hour}
              info={marker.additional_information}
              link={props.currentUser ? '/bookspot/new' : '/login'}
              label={props.currentUser ? 'Book Spot' : 'Sign In to Book'}
            />
          </InfoWindow>
        )}
      </Marker>
    ))}
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder="Find a parking spot"
      inputStyle={INPUT_STYLE}
    />
  </GoogleMap>
));

//This contains the map
class mapContainer extends Component {
  constructor(props) {
    super(props);

    //Initial state for the map's current location
    this.state = {
      bounds: null,
      center: {
        lat: 49.2827291,
        lng: -123.12073750000002,
      },
    };
  }

  //Functions for the Search Box events

  //These are the bindings for the open/close info window functions
  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  //These are the bindings for the search box functions
  handleMapMounted = this.handleMapMounted.bind(this);
  handleBoundsChanged = this.handleBoundsChanged.bind(this);
  handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
  handlePlacesChanged = this.handlePlacesChanged.bind(this);

  //This will call the Meteor Method to update showInfo to true
  handleMarkerClick(parkingSpot) {
    Meteor.call('handleMarkerClick', parkingSpot);
  }

  //This will call the Meteor Method to update showInfo to false
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
    return (
      <div style={styles.mapContainer}>
        <ParkingGoogleMap
          containerElement={
            <div style={{ height: `100%`, width: '100%' }} />
          }
          mapElement={
            <div style={{ height: `100%`, width: '100%' }} />
          }
          markers={this.props.parkingSpotList}
          currentUser={this.props.currentUser}
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
  parkingSpotList: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

const ShareSpaceContainer = createContainer(() => {
  Meteor.subscribe('getParkingSpots');
  return {
    currentUser: Meteor.user(),
    parkingSpotList: ParkingSpots.find({}).fetch(),
  };
}, mapContainer);

export default ShareSpaceContainer
