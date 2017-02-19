import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const InfoBox = ({ address, postal, price, info, link, label }) => (
  <div style={{ width: '200px', height: '200px' }}>
    <h2>{address}, {postal}</h2>
    <p>Price per hour: {price}</p>
    <p>{info}</p>
    <Link to={link}>
      <RaisedButton label={label} />
    </Link>
  </div>
);

InfoBox.defaultProps = {
  info: '',
};

InfoBox.propTypes = {
  address: PropTypes.string.isRequired,
  postal: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  info: PropTypes.string,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InfoBox;
