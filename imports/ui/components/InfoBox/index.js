// import { Meteor } from 'meteor/meteor';
import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
// import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { addBookingSpot } from '../../containers/BookSpotInput/actions';

const styles = {
  infoBox: {
    width: '200px',
    height: '200px',
    padding: '10px',
  },
};

// const InfoBox = ({ parkingSpotId, address, postal, price, info, link, label }) => (
class InfoBox extends Component {
  /* constructor(props) {
    super(props);
  }*/

  handleBookingClick(e) {
    e.preventDefault();

    const bookingParkSpot = {
      parkingSpotId: this.props.parkingSpotId,
      originalLocation: 'BOOKING-MAP',
    };

    this.props.addBookingSpot(bookingParkSpot);
    // browserHistory.push(Meteor.userId() ? '/bookspot/new' : '/login');
  }

  render() {
    return (
      <div style={styles.infoBox}>
        <h2>{this.props.address}, {this.props.postal}</h2>
        <p>Price per hour: {this.props.price}</p>
        <p>{this.props.info}</p>
        <Link to={this.props.link}>
        <RaisedButton
          label={this.props.label}
          primary
          onClick={e => this.handleBookingClick(e)}
        />
        </Link>
      </div>
    );
  }
}

// );

InfoBox.defaultProps = {
  info: '',
};

InfoBox.propTypes = {
  // router: PropTypes.object.isRequired,
  parkingSpotId: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postal: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  info: PropTypes.string,
  // link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addBookingSpot: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addBookingSpot: (bookingParkSpot) => {
    dispatch(addBookingSpot(bookingParkSpot));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(InfoBox);


// export default InfoBox;
