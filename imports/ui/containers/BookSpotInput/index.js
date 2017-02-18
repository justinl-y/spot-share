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
};

BookSpotInput.propTypes = {
  bookSpotInputType: PropTypes.string.isRequired,
  bookingSpotId: PropTypes.string.isRequired,
  addBookingSpot: PropTypes.func.isRequired,
  editBookingSpot: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookSpotInput);
