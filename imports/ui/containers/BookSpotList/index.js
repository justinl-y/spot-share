import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Bookings } from '../../../api/bookings';
import Booking from '../../components/Booking';



class BookSpotList extends Component {
  render() {
    const bookingsList = this.props.bookingsList;//eslint-disable-line
    return (
      <div>
        <h2>Bookings List</h2>
        <ul>
          {bookingsList.map(booking =>
            <Booking
              key={booking._id}
              id={booking._id}
              parkingSpotId={booking.parkingSpotID}
              dateBooked={booking.dateBooked}
              timeBooked={booking.TimeBooked}
              duration={booking.duration}
              bookingCost={booking.bookingCost}
            />,
          )}
        </ul>
      </div>
    );
  }
}
const BookingsContainer = createContainer(() => {
  Meteor.subscribe('getBookings');
  return {
    bookingsList: Bookings.find({}).fetch(),
  };
}, BookSpotList);

export default connect()(BookingsContainer);
