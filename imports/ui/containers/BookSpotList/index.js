import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Bookings } from '../../../api/bookings';
import Booking from '../../components/Booking';
import { deleteBookingSpot } from './actions';
import { editBookingSpot } from '../BookSpotInput/actions';
import { setApplicationLocation } from '../App/actions';

const styles = {
  component: {
    textAlign: 'center',
  },
};

const currentLocation = 'BOOK-SPOT';

class BookSpotList extends Component {
  componentWillMount() {
    this.props.setApplicationLocation(currentLocation);
  }

  render() {
    const bookingsList = this.props.bookingsList;

    return (
      <div>
        <h2>Bookings List</h2>
        <ul>
          {bookingsList.map(booking =>
            <Booking
              key={booking._id}
              id={booking._id}
              userId={booking.user_id}
              parkingSpotId={booking.parking_spot_id}
              dateBooked={booking.date_booked}
              timeBooked={booking.time_booked}
              duration={booking.duration}
              bookingCost={booking.booking_cost}
              editBookings={this.props.editBookingSpot}
              deleteBookings={this.props.deleteBookingSpot}
            />,
          )}
        </ul>
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
  editBookingSpot: (id) => {
    dispatch(editBookingSpot(id));
    browserHistory.push('/bookspot/edit');
  },
  deleteBookingSpot: (id) => {
    dispatch(deleteBookingSpot(id));
  },
});

// proptypes validation
BookSpotList.propTypes = {
  bookingsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setApplicationLocation: PropTypes.func.isRequired,
  editBookingSpot: PropTypes.func.isRequired,
  deleteBookingSpot: PropTypes.func.isRequired,
};

// connect meteor pub sub
const BookSpaceContainer = createContainer(() => {
  Meteor.subscribe('getBookings');
  return {
    bookingsList: Bookings.find({ user_id: Meteor.userId() }).fetch(),
  };
}, BookSpotList);

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookSpaceContainer);

