import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const InfoBox = ({ address, price, info }) => (
  <div style={{ width: '200px', height: '200px' }}>
    <h2>{address}</h2>
    <p>Price per hour: {price}</p>
    <p>{info}</p>
    <RaisedButton label="Book Space" />
  </div>
);

InfoBox.propTypes = {
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
};

export default InfoBox;
