import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Schedule from 'material-ui/svg-icons/action/schedule';
import HourGlass from 'material-ui/svg-icons/action/hourglass-empty';
import Event from 'material-ui/svg-icons/action/event';
import Money from 'material-ui/svg-icons/editor/attach-money';
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
    marginBottom: '8px',
  },
  listContainer: {
    display: 'flex',
    textAlign: 'left',
  },
};

const Booking = ({ id, bookingCost, duration, dateBooked, timeBooked, editBookings, deleteBookings }) => (
  <div style={styles.componentContainer}>
    <div style={styles.bookingContainer}>
      <Card style={{ marginBottom: '20px' }}>
        <Toolbar>
          <ToolbarTitle text="Booking Info" />
        </Toolbar>
        <List style={styles.listContainer}>
          <div>
            <ListItem primaryText={dateBooked.slice(4, 16)} secondaryText="Date Booked" leftIcon={<Event />} />
            <ListItem primaryText={timeBooked.slice(16, 21)} secondaryText="Time Booked" leftIcon={<Schedule />} />
          </div>
          <div>
            <ListItem primaryText={`${duration} hours`} secondaryText="Duration" leftIcon={<HourGlass />} />
            <ListItem primaryText={`$${bookingCost}`} secondaryText="Booking Cost" leftIcon={<Money />} />
          </div>
        </List>
        <div style={styles.buttonContainer}>
          <RaisedButton
            style={{ width: '45%', marginLeft: '20px' }}
            label="Edit"
            primary
            onClick={(e) => { e.preventDefault(); editBookings(id); }}
          />
          <RaisedButton
            style={{ width: '45%', marginLeft: '20px', marginRight: '15px' }}
            label="Delete"
            primary
            onClick={(e) => { e.preventDefault(); deleteBookings(id); }}
          />
        </div>
      </Card>
    </div>
  </div>
);

Booking.propTypes = {
  id: PropTypes.string.isRequired,
  bookingCost: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  dateBooked: PropTypes.string.isRequired,
  timeBooked: PropTypes.string.isRequired,
  editBookings: PropTypes.func.isRequired,
  deleteBookings: PropTypes.func.isRequired,
};

export default Booking;
