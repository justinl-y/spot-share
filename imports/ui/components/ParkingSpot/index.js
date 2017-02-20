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
  componentContainer: {
    flexBasis: '45%',
    width: '500px',
    justifyContent: 'center',
    marginRight: '20px',
  },
  bookingContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexBasis: '30%',
    flexDirection: 'column',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: '10px',
  },
  listContainer: {
    display: 'flex',
    textAlign: 'left',
  },
};

const ParkingSpot = ({ id, address, availableFrom, availableTo, pricePerHour, additionalInformation, onClickEdit, onClickDelete }) => (
<div style={styles.componentContainer}> 
  <div style={styles.bookingContainer}>
    <Card style={{ marginBottom: '20px' }}>
      <Toolbar>
        <ToolbarTitle text={address} leftIcon={<Location />} />
      </Toolbar>
      <List style={styles.listContainer}>
      <div >
        <ListItem primaryText={availableFrom.slice(0, 15)} secondaryText="Available From" leftIcon={<DateFrom />} />
        <ListItem primaryText={`$${pricePerHour}`} secondaryText="Price Per Hour" leftIcon={<Money />} />
      </div>
      <div>
        <ListItem primaryText={availableTo.slice(0, 15)} secondaryText="Available To" leftIcon={<Event />} />
        <ListItem primaryText={additionalInformation} secondaryText="Additional Information" leftIcon={<Info />} />
      </div>
      </List>
      <div style={styles.buttonContainer}>
        <RaisedButton
          style={{ width: '45%', marginLeft: '20px' }}
          label="Edit"
          primary="true"
          onClick={(e) => { e.preventDefault(); onClickEdit(id); }}
        />
        <RaisedButton
          style={{ width: '45%', marginLeft: '20px', marginRight: '15px' }}
          label="Delete"
          primary="true"
          onClick={(e) => { e.preventDefault(); onClickDelete(id); }}
        />
      </div>
    </Card>
  </div>
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
