import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ShareSpotAdd from '../../components/ShareSpotAdd';
import ShareSpotEdit from '../../components/ShareSpotEdit';

import { insertParkingSpot, updateParkingSpot } from './actions';

class ShareSpotInput extends Component {
  constructor() {
    super();

    this.state = {
    };
  }
  componentWillMount() {
    if (!Meteor.userId()) {
      this.props.router.push('/login');
    }
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
              editShareSpot={this.props.editParkingSpot}
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
  editParkingSpot: (parkingSpot) => {
    dispatch(updateParkingSpot(parkingSpot));
  },
});

ShareSpotInput.defaultProps = {
  parkingSpotId: '',
};

ShareSpotInput.propTypes = {
  router: PropTypes.object.isRequired,
  shareSpotInputType: PropTypes.string.isRequired,
  parkingSpotId: PropTypes.string.isRequired,
  addParkingSpot: PropTypes.func.isRequired,
  editParkingSpot: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShareSpotInput);
