import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const InfoBox = ({ address, price, info }) => (
  <div style={{ width: '200px', height: '200px' }}>
    <h2>{address}</h2>
    <p>Price per hour: {price}</p>
    <p>{info}</p>
    <Link to="/bookspot/list">
      <RaisedButton label="Book Space" />
    </Link>
  </div>
);

InfoBox.propTypes = {
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
};

export default InfoBox;
