import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ParkingSpots = new Mongo.Collection('parking_spots');

// meteor publish

// fields to return
const parkingSpotPubFields = {
  // text: 1,
  // completed: 1
};

const getParkingSpotsPublication = function (filter) {
  const query = {};

  switch (filter) {
    default:
      break;
  }

  Counts.publish(this, 'ParkingSpotCount', ParkingSpots.find(query));

  return ParkingSpots.find(query, {
    fields: parkingSpotPubFields,
    // skip: pageSkip,
    // limit: 10
  });
};

if (Meteor.isServer) {
  Meteor.publish('getParkingSpots', getParkingSpotsPublication);
}

/*
const todoPubFields = {
  text: 1,
  completed: 1
};

const getTodoPublication = function (filter, pageSkip = 0) {
  const query = {};

  switch (filter) {
    case 'SHOW_COMPLETED':
      query.completed = true;
      break;
    case 'SHOW_ACTIVE':
      query.completed = false;
      break;
    default:
      break;
  }

  Counts.publish(this, 'TodoCount', Todos.find(query));

  return Todos.find(query, {
    fields: todoPubFields,
    skip: pageSkip,
    limit: 10
  });
};

Meteor.publish('getTodos', getTodoPublication);
*/

// add meteor methods
