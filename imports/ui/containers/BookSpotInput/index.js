import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BookSpotAdd from '../../components/BookSpotAdd';
import BookSpotEdit from '../../components/BookSpotEdit';
import { insertBookingSpot, updateBookingSpot } from './actions';

class BookSpotInput extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    const { bookSpotInputType } = this.props;

    return (
      <div>
        {
          bookSpotInputType !== 'EDIT' ?
            <BookSpotAdd
              addBookSpot={this.props.addBookingSpot}
              parkingSpotId={this.props.parkingSpotId}
              originalLocation={this.props.originalLocation}
            />
          :
            <BookSpotEdit
              bookingSpotId={this.props.bookingSpotId}
              editBookSpot={this.props.editBookingSpot}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookSpotInputType: state.appData.bookSpotInput.inputType,
    bookingSpotId: state.appData.bookSpotInput.id,
    parkingSpotId: state.appData.bookSpotInput.parkingSpotId,
    originalLocation: state.appData.bookSpotInput.originalLocation,
  };
};

const mapDispatchToProps = dispatch => ({
  addBookingSpot: (bookingSpot) => {
    dispatch(insertBookingSpot(bookingSpot));
  },
  editBookingSpot: (bookingSpot) => {
    dispatch(updateBookingSpot(bookingSpot));
  },
});

BookSpotInput.defaultProps = {
  bookingSpotId: '',
  parkingSpotId: '',
  originalLocation: '',
};

BookSpotInput.propTypes = {
  bookSpotInputType: PropTypes.string.isRequired,
  bookingSpotId: PropTypes.string.isRequired,
  addBookingSpot: PropTypes.func.isRequired,
  editBookingSpot: PropTypes.func.isRequired,
  parkingSpotId: PropTypes.string,
  originalLocation: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookSpotInput);
