import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Bookings } from '../../../api/bookings';
import { ParkingSpots } from '../../../api/parking-spots';

class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('bookings');
  Meteor.subscribe('getParkingSpots');
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    bookings: Bookings.find({}).fetch(),
    parkingSpots: ParkingSpots.find({}).fetch(),
  };
}, App);
