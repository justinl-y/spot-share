import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Bookings } from '../../../api/bookings';
import { addBookingSpot } from '../../containers/BookSpotInput/actions';

class BookSpotEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      fieldErrors: {},
    };
    this.onChange = address => this.setState({ address });
  }
  componentWillMount() {
    const bookingSpot = this.props.bookingSpot;
    this.addBookingSpotToState(bookingSpot);
  }
  componentWillUnmount() {
    this.props.addBookingSpot();
  }
  addBookingSpotToState(bookingSpot) {
    this.setState({
      fields: {},
    });
    const fields = {};

    fields._id = bookingSpot[0]._id;

    this.setState({ fields });
  }

  handleTextFieldChange(e, validation) {
    const fieldErrors = this.state.fieldErrors;
    delete fieldErrors[e.target.name];

    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    validation.forEach((type) => {
      switch (type) {
        case 'req':
          if (!fields[e.target.name]) {
            const errorObject = { [e.target.name]: 'Required field' };
            this.setState({ fieldErrors: { ...this.state.fieldErrors, ...errorObject } });
          }
          break;
        case 'num':
          if (isNaN(fields[e.target.name])) {
            const errorObject = { [e.target.name]: 'Number required' };
            this.setState({ fieldErrors: { ...this.state.fieldErrors, ...errorObject } });
          }
          break;
        default:
      }
    });

    this.setState({ fields });
  }

  validate(data) {
    this.setState({
      fieldErrors: {},
    });

    const errors = {};

    if (!data.dateBooked) errors.dateBooked = 'Required field';
    if (!data.timeBooked) errors.timeBooked = 'Required field';
    if (isNaN(data.duration)) errors.duration = 'Number required';
    if (isNaN(data.bookingCost)) errors.bookingCost = 'Number required';
    if (!data.duration) errors.duration = 'Required field';
    if (!data.bookingCost) errors.bookingCost = 'Required field';

    return errors;
  }
  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBookSpot: () => {
    dispatch(addBookingSpot());
  },
});

BookSpotEdit.propTypes = {
  addBookingSpot: PropTypes.func.isRequired,
  bookingSpot: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const BookSpaceEditContainer = createContainer((parkingSpotId) => {
  Meteor.subscribe('getBookings');
  return {
    bookingSpot: Bookings.find({ _id: parkingSpotId.parkingSpotId }).fetch(),
  };
}, BookSpotEdit);

export default connect(
  null,
  mapDispatchToProps,
)(BookSpaceEditContainer);
