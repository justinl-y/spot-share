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
    /* if (!this.userId) {
      throw new Meteor.Error('Not-Authorised');
    }*/

    // data validataion
    /* new SimpleSchema({
      inputValue: { type: String },
    }).validate({ inputValue }); */

    const insert = ParkingSpots.insert({
      user_id: 'JLjpvCHbBvkSaaKwm', // TODO get user id from login
      address: parkingSpot.address,
      post_code: parkingSpot.postCode,
      geolocation: { lat: parseInt(parkingSpot.latitude, 10).latitude, lng: parseInt(parkingSpot.longitude, 10) },
      available_from: parkingSpot.availableFrom.toString(), // TODO format into correct date type
      available_to: parkingSpot.availableTo.toString(), // TODO format into correct date type
      price_per_hour: parseInt(parkingSpot.pricePerHour, 10),
      additional_information: parkingSpot.additionalInformation,
    });

    console.log('Inserted');
    return insert;
  },
  deleteParkingSpot(id) {
    // check permissions
    /* if (!this.userId) {
      throw new Meteor.Error('Not-Authorised');
    }*/

    // data validataion
    new SimpleSchema({
      id: { type: String },
    }).validate({ id });

    const remove = ParkingSpots.remove({
      _id: id,
    });

    console.log('Deleted');
    return remove;
  },
  updateParkingSpot(parkingSpot) {
    // check permissions
    /* if (!this.userId) {
      throw new Meteor.Error('Not-Authorised');
    }*/

    // data validataion
    /* new SimpleSchema({
      inputValue: { type: String },
    }).validate({ inputValue }); */

    const update = ParkingSpots.update(
      { _id: parkingSpot._id },
      { $set: { user_id: 'JLjpvCHbBvkSaaKwm', // TODO get user id from login
        address: parkingSpot.address,
        post_code: parkingSpot.postCode,
        geolocation: { lat: parseInt(parkingSpot.latitude, 10), lng: parseInt(parkingSpot.longitude, 10) },
        available_from: parkingSpot.availableFrom.toString(), // TODO format into correct date type
        available_to: parkingSpot.availableTo.toString(), // TODO format into correct date type
        price_per_hour: parseInt(parkingSpot.pricePerHour, 10),
        additional_information: parkingSpot.additionalInformation },
      });

    return update;
  },
});


/* Meteor.methods({
  'todos.addToDo'(inputValue) {
    if(!this.userId) {
      throw new Meteor.Error('Not-Authorised');
    }

    // data validataion
    new SimpleSchema({
      inputValue: { type: String },
    }).validate({ inputValue });

    ToDos.insert({      
      title: inputValue,     
      complete: false,
      owner: this.userId
    });
  },
}) */
