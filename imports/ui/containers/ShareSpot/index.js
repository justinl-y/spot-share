import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

import { ParkingSpots } from '../../../api/parking-spots';

import ParkingSpot from '../../components/ParkingSpot';

import { editParkingSpot } from './actions';
import { changeApplicationLocation } from '../App/actions';


// import { fetchPosts } from '../PostList/actions';
// import { fetchCategories } from './actions';

const styles = {
  shareSpot: {
    textAlign: 'center',
  },
};

const currentLocation = 'SHARE-SPOT';

class ShareSpace extends Component {
  componentWillMount() {
    this.props.changeApplicationLocation(currentLocation);
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

              // onClick={() => dispatch(editParkingSpot(parkingSpot))}
              onClick={() => this.props.editParkingSpot(parkingSpot)}
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


const ShareSpaceContainer = createContainer(() => {
  Meteor.subscribe('getParkingSpots');
  return {
    parkingSpotList: ParkingSpots.find({}).fetch(),
  };
}, ShareSpace);

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
  changeApplicationLocation: (location) => {
    dispatch(changeApplicationLocation(location));
  },
});

ShareSpace.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  parkingSpotList: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeApplicationLocation: PropTypes.func.isRequired,
  editParkingSpot: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareSpaceContainer);

// export default ShareSpace;
