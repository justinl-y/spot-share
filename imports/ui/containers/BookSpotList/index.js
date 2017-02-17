import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Bookings } from '../../../api/bookings';
import Booking from '../../components/Booking';



class BookSpotList extends Component {
  render() {
    const bookingsList = this.props.bookingsList;//eslint-disable-line

    console.log(bookingsList);
    return (
      <div>
        <h2>Bookings List</h2>
        <ul>
          {bookingsList.map(booking =>
            <Booking
              key={booking._id}
              id={booking._id}
              parkingSpotId={booking.parking_spot_id}
              dateBooked={booking.date_booked}
              timeBooked={booking.time_booked}
              duration={booking.duration}
              bookingCost={booking.booking_cost}
            />,
          )}
        </ul>
      </div>
    );
  }
}

// todo add proptype validation

const BookingsContainer = createContainer(() => {
  Meteor.subscribe('getBookings');
  return {
    bookingsList: Bookings.find({}).fetch(),
  };
}, BookSpotList);

export default connect()(BookingsContainer);
