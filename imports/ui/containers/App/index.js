import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { Meteor } from 'meteor/meteor';
// import { createContainer } from 'meteor/react-meteor-data';
// import { Bookings } from '../../../api/bookings';
// import { ParkingSpots } from '../../../api/parking-spots';

import { setApplicationLocation } from '../App/actions';

const currentLocation = 'HOME';

class App extends Component {
  componentWillMount() {
    this.props.setApplicationLocation(currentLocation);
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    visibilityFilter: state.appData.visibilityFilter,
    applicationLocation: state.appData.applicationLocation,
  };
}

const mapDispatchToProps = dispatch => ({
  setApplicationLocation: (location) => {
    dispatch(setApplicationLocation(location));
  },
});

App.propTypes = {
  children: PropTypes.object.isRequired,
  setApplicationLocation: PropTypes.func.isRequired,
};

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

/* export default createContainer(() => {
  Meteor.subscribe('bookings');
  // Meteor.subscribe('getParkingSpots');
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    bookings: Bookings.find({}).fetch(),
    // parkingSpots: ParkingSpots.find({}).fetch(),
  };
}, App); */
