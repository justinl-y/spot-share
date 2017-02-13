import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

import { ParkingSpots } from '../../../api/parking-spots';
import ParkingSpot from '../../components/ParkingSpot';

import { editParkingSpot } from './actions';
import { setApplicationLocation } from '../App/actions';

const styles = {
  shareSpot: {
    textAlign: 'center',
  },
};

const currentLocation = 'SHARE-SPOT';

class ShareSpace extends Component {
  componentWillMount() {
    this.props.setApplicationLocation(currentLocation);
  }

  render() {
    // const { dispatch } = this.props;
    const parkingSpots = this.props.parkingSpotList;

    return (
      <div style={styles.shareSpot}>
        <h2>Parking Spots</h2>
        <ul>
          {parkingSpots.map(parkingSpot =>
            <ParkingSpot
              key={parkingSpot._id}
              id={parkingSpot._id}
              userId={parkingSpot.user_id}
              availableFrom={parkingSpot.available_from}
              availableTo={parkingSpot.available_to}
              pricePerHour={parkingSpot.price_per_hour}
              additionalInformation={parkingSpot.additional_information}
              // {...parkingSpot}

              // onClickEdit={() => dispatch(editParkingSpot(parkingSpot))}
              onClickEdit={() => this.props.editParkingSpot(parkingSpot)}
            />,
          )}
        </ul>
      </div>
    );
  }
}

/* <div>
        <ul>
          {todos.map(todo =>
            <Todo
              key={todo._id}
              {...todo}
              onClick={() => dispatch(toggleTodo(todo._id))}
            />
          )}
        </ul>
        {pagination}
</div>

const TodoContainer = createContainer(({visibilityFilter, pageSkip}) => {
  const todoSub = Meteor.subscribe('getTodos', visibilityFilter, pageSkip);

  return {
    todoSubReady: todoSub.ready(),
    todoList: Todos.find({}, {limit: 10}).fetch() || [],
    todoCount: Counts.get('TodoCount')
  };
}, TodoList);
*/

function mapStateToProps(state) {
  return {
    visibilityFilter: state.appData.visibilityFilter,
    applicationLocation: state.appData.applicationLocation,
  };
}

const mapDispatchToProps = dispatch => ({
  editParkingSpot: (item) => {
    dispatch(editParkingSpot(item));
  },
  setApplicationLocation: (location) => {
    dispatch(setApplicationLocation(location));
  },
});

// connect meteor pub sub
const ShareSpaceContainer = createContainer(() => {
  Meteor.subscribe('getParkingSpots');
  return {
    parkingSpotList: ParkingSpots.find({}).fetch(),
  };
}, ShareSpace);

// proptypes validation
ShareSpace.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  parkingSpotList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setApplicationLocation: PropTypes.func.isRequired,
  editParkingSpot: PropTypes.func.isRequired,
};

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShareSpaceContainer);
