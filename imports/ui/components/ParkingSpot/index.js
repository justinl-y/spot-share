import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Event from 'material-ui/svg-icons/action/event';
import DateFrom from 'material-ui/svg-icons/action/today';
import Location from 'material-ui/svg-icons/communication/location-on';
import Money from 'material-ui/svg-icons/editor/attach-money';
import Info from 'material-ui/svg-icons/action/info-outline';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

const styles = {
  bookingContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: '8px',
  },
  listContainer: {
    textAlign: 'left',
  },
};

const ParkingSpot = ({ id, address, availableFrom, availableTo, pricePerHour, additionalInformation, onClickEdit, onClickDelete }) => (
  <div style={styles.bookingContainer}>
    <Card style={{ marginBottom: '20px' }}>
      <Toolbar>
        <ToolbarTitle text="Booking Info" />
      </Toolbar>
      <List style={styles.listContainer}>
        <ListItem primaryText={`Address: ${address}`} leftIcon={<Location />} />
        <ListItem primaryText={`From: ${availableFrom}`} leftIcon={<DateFrom />} />
        <ListItem primaryText={`To: ${availableTo} hours`} leftIcon={<Event />} />
        <ListItem primaryText={`Price per Hour: $${pricePerHour}`} leftIcon={<Money />} />
        <ListItem primaryText={`Additional Info: ${additionalInformation}`} leftIcon={<Info />} />
      </List>
      <div style={styles.buttonContainer}>
        <RaisedButton
          style={{ width: '50%', marginLeft: '20px' }}
          label="Edit"
          primary="true"
          onClick={(e) => { e.preventDefault(); onClickEdit(id); }}
        />
        <RaisedButton
          style={{ marginLeft: '10px' }}
          label="Delete"
          primary="true"
          onClick={(e) => { e.preventDefault(); onClickDelete(id); }}
        />
      </div>
    </Card>
  </div>  
);

ParkingSpot.defaultProps = {
  additionalInformation: '',
};

ParkingSpot.propTypes = {
  id: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  availableFrom: PropTypes.string.isRequired,
  availableTo: PropTypes.string.isRequired,
  pricePerHour: PropTypes.number.isRequired,
  additionalInformation: PropTypes.string,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ParkingSpot;
