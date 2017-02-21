import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ParkingSpots = new Mongo.Collection('parking_spots');

// meteor publish

// fields of document to return
const parkingSpotPubFields = {
  // text: 1,
  // completed: 1
};

// get all parking spots
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

// meteor methods
Meteor.methods({
  insertParkingSpot(parkingSpot) {
    // check permissions
    if (!this.userId) {
      throw new Meteor.Error('Not-Authorised');
    }

    // data validataion
    /* new SimpleSchema({
      // id: { type: String },
      address: { type: String },
      postCode: { type: String },
    }).validate({ parkingSpot }); */

    const insert = ParkingSpots.insert({
      user_id: Meteor.userId(),
      address: parkingSpot.address,
      post_code: parkingSpot.postCode,
      geolocation: { lat: Number(parkingSpot.latitude), lng: Number(parkingSpot.longitude) },
      available_from: parkingSpot.availableFrom.toString(), // TODO format into correct date type
      available_to: parkingSpot.availableTo.toString(), // TODO format into correct date type
      price_per_hour: Number(parkingSpot.pricePerHour),
      additional_information: parkingSpot.additionalInformation,
    });

    console.log('Share Spot Inserted');
    return insert;
  },
  deleteParkingSpot(id) {
    // check permissions
    if (!this.userId) {
      throw new Meteor.Error('Not-Authorised');
    }

    // data validataion
    new SimpleSchema({
      id: { type: String },
    }).validate({ id });

    const remove = ParkingSpots.remove({
      _id: id,
    });

    console.log('Share Spot Deleted');
    return remove;
  },
  updateParkingSpot(parkingSpot) {
    // check permissions
    // console.log(this.userId);
    // if (!this.userId) {

    if (parkingSpot.userId !== this.userId) {
      throw new Meteor.Error('Not-Authorised');
    }

    // data validataion
    /* new SimpleSchema({
      _id: { type: String },
      address: { type: String },
      postCode: { type: String },
      longitude: { type: Number },
      latitude: { type: Number },
      availableFrom: { type: Date },
      availableTo: { type: Date },
      pricePerHour: { type: Number },

    }).validate({ ...parkingSpot });*/

    const update = ParkingSpots.update(
      { _id: parkingSpot._id },
      {
        $set: {
          address: parkingSpot.address,
          post_code: parkingSpot.postCode,
          geolocation: { lat: Number(parkingSpot.latitude), lng: Number(parkingSpot.longitude) },
          available_from: parkingSpot.availableFrom.toString(),
          available_to: parkingSpot.availableTo.toString(),
          price_per_hour: Number(parkingSpot.pricePerHour),
          additional_information: parkingSpot.additionalInformation,
        },
      });

    console.log('Share Spot Updated');
    return update;
  },

  // Set showInfo to true
  handleMarkerClick(parkingSpot) {
    ParkingSpots.update(parkingSpot._id, {
      $set: { showInfo: parkingSpot.showInfo = true },
    });
  },

  // Set showInfo to false
  handleMarkerClose(parkingSpot) {
    ParkingSpots.update(parkingSpot._id, {
      $set: { showInfo: parkingSpot.showInfo = false },
    });
  },
});


/* if (item.owner !== this.userId) {
  throw new Meteor.Error('todos.toggleComplete.not-authorized',
    'You are not allowed to update to-dos for other users.');
}

ToDos.update(item._id, {
  $set: { complete: !item.complete },
});*/
