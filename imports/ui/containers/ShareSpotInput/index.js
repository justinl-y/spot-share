import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ShareSpotAdd from '../../components/ShareSpotAdd';
// import ShareSpotEdit from '../../components/ShareSpotEdit';

import { addParkingSpot } from './actions';

class ShareSpotInput extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <ShareSpotAdd
        addShareSpot={this.props.addParkingSpot}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addParkingSpot: (parkingSpot) => {
    dispatch(addParkingSpot(parkingSpot));
  },
});

ShareSpotInput.propTypes = {
  addParkingSpot: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(ShareSpotInput);   // mapStateToProps,
