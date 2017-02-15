import React, { PropTypes } from 'react';

const styles = {
  li: {
    textAlign: 'center',
    listStyle: 'none',
  },
};

const ParkingSpot = ({ id, userId, address, postCode, availableFrom, availableTo, pricePerHour, additionalInformation, onClickEdit, onClickDelete }) => (
  <li style={styles.li}>
    <h3>A parking spot - ID: {id}</h3>
    <p>User ID: {userId} | Address: {address} | Post Code: {postCode}</p>
    <p>Available From: {availableFrom} To: {availableTo} | Price per hour: {pricePerHour}</p>
    <p>Additional Info: {additionalInformation}</p>
    <button
      onClick={(e) => { e.preventDefault(); onClickEdit(id); }}
    >Edit</button>
    <button
      onClick={(e) => { e.preventDefault(); onClickDelete(id); }}
    >Delete</button>
  </li>
);

ParkingSpot.propTypes = {
  id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postCode: PropTypes.string.isRequired,
  availableFrom: PropTypes.string.isRequired,
  availableTo: PropTypes.string.isRequired,
  pricePerHour: PropTypes.number.isRequired,
  additionalInformation: PropTypes.string.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ParkingSpot;
