import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

import { ParkingSpots } from '../../../api/parking-spots';

import ParkingSpot from '../../components/ParkingSpot';


// import { fetchPosts } from '../PostList/actions';
// import { fetchCategories } from './actions';

class ShareSpace extends Component {
  render() {
    const { dispatch } = this.props;
    const parkingSpots = this.props.parkingSpotList;

    return (
      <div>
        <ul>
          {parkingSpots.map(parkingSpot =>
            <ParkingSpot
              key={parkingSpot._id}
              {...parkingSpot}
             // onClick={() => dispatch(toggleTodo(parkingSpot._id))}
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
    // visibilityFilter: state.visibilityFilter,
    // pageSkip: state.pageSkip
  };
}

export default connect(mapStateToProps)(ShareSpaceContainer);

// export default ShareSpace;
