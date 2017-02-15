import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ShareSpotAdd from '../../components/ShareSpotAdd';
import ShareSpotEdit from '../../components/ShareSpotEdit';

import { insertParkingSpot } from './actions';

class ShareSpotInput extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    const { shareSpotInputType } = this.props;

    return (
      <div>
        {
          shareSpotInputType !== 'EDIT' ?
            <ShareSpotAdd
              addShareSpot={this.props.addParkingSpot}
            />
          :
            <ShareSpotEdit
              parkingSpotId={this.props.parkingSpotId}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shareSpotInputType: state.appData.shareSpotInput.inputType,
    parkingSpotId: state.appData.shareSpotInput.id,
  };
};

const mapDispatchToProps = dispatch => ({
  addParkingSpot: (parkingSpot) => {
    dispatch(insertParkingSpot(parkingSpot));
  },
});

ShareSpotInput.defaultProps = {
  parkingSpotId: '',
};

ShareSpotInput.propTypes = {
  shareSpotInputType: PropTypes.string.isRequired,
  parkingSpotId: PropTypes.string.isRequired,
  addParkingSpot: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShareSpotInput);
