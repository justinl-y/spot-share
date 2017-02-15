import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { browserHistory } from 'react-router';

import { ParkingSpots } from '../../../api/parking-spots';
import ParkingSpot from '../../components/ParkingSpot';

import { deleteParkingSpot } from './actions';
import { editParkingSpot } from '../ShareSpotInput/actions';
import { setApplicationLocation } from '../App/actions';

const styles = {
  component: {
    textAlign: 'center',
  },
};

const currentLocation = 'SHARE-SPOT';

class ShareSpotList extends Component {
  componentWillMount() {
    this.props.setApplicationLocation(currentLocation);
  }

  render() {
    const parkingSpots = this.props.parkingSpotList;

    return (
      <div style={styles.component}>
        <h2>Parking Spots</h2>
        <ul>
          {parkingSpots.map(parkingSpot =>
            <ParkingSpot
              key={parkingSpot._id}
              id={parkingSpot._id}
              userId={parkingSpot.user_id}
              address={parkingSpot.address}
              availableFrom={parkingSpot.available_from}
              availableTo={parkingSpot.available_to}
              postCode={parkingSpot.post_code}
              pricePerHour={parkingSpot.price_per_hour}
              additionalInformation={parkingSpot.additional_information}
              onClickEdit={this.props.editParkingSpot}
              onClickDelete={this.props.deleteParkingSpot}
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
  editParkingSpot: (id) => {
    dispatch(editParkingSpot(id));
    browserHistory.push('/sharespot/edit');
  },
  deleteParkingSpot: (id) => {
    dispatch(deleteParkingSpot(id));
  },
});

// proptypes validation
ShareSpotList.propTypes = {
  parkingSpotList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setApplicationLocation: PropTypes.func.isRequired,
  editParkingSpot: PropTypes.func.isRequired,
  deleteParkingSpot: PropTypes.func.isRequired,
};

// connect meteor pub sub
const ShareSpaceContainer = createContainer(() => {
  Meteor.subscribe('getParkingSpots');
  return {
    parkingSpotList: ParkingSpots.find({}).fetch(),
  };
}, ShareSpotList);

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShareSpaceContainer);
