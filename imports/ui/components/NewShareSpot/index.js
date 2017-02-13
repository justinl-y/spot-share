import React, { Component, PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

class NewShareSpot extends Component {
  constructor() {
    super();

    this.state = {
      fields: {},
      fieldErrors: {},
    };
  }

  handleTextFieldChange(e) {
    const fields = this.state.fields;

    fields[e.target.name] = e.target.value;

    this.setState({ fields });
  }

  handleSubmit() {
    const data = this.state;

    if (!data) return;
    console.log(data);

    // submit to redux
    // console.log('Going to redux');
  }

  render() {
    const styles = {
      'new-share-spot': {
        height: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      card: {
        width: '480px',
      },
      textField: {
        width: '100%',
      },
      textFieldSmall: {
        width: '50%',
      },
      datePickerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    };

    return (
      <div style={styles['new-share-spot']}>
        <Card style={styles.card}>
          <Paper>
            <Toolbar>
              <ToolbarTitle text="Add a new spot to share" />
            </Toolbar>
            <CardText>
              <form>
                <TextField
                  style={styles.textField}
                  name="address"
                  hintText="Address"
                  errorText="Address"
                  floatingLabelText="Address"
                  value={this.state.fields.address}
                  onChange={this.handleTextFieldChange.bind(this)}
                />

                <TextField
                  style={styles.textField}
                  name="postCode"
                  hintText="Post Code"
                  errorText="Please provide a post code"
                  floatingLabelText="Post Code"
                  value={this.state.fields.postCode}
                  onChange={this.handleTextFieldChange.bind(this)}
                />

                <TextField
                  style={styles.textFieldSmall}
                  name="longitude"
                  hintText="Longitude"
                  errorText="Longitude"
                  floatingLabelText="Longitude"
                  value={this.state.fields.longitude}
                  onChange={this.handleTextFieldChange.bind(this)}
                />

                <TextField
                  style={styles.textFieldSmall}
                  name="latitude"
                  hintText="Latitude"
                  errorText="Latitude"
                  floatingLabelText="Latitude"
                  value={this.state.fields.latitude}
                  onChange={this.handleTextFieldChange.bind(this)}
                />

                <div style={styles.datePickerContainer}>
                  <DatePicker
                    textFieldStyle={{ width: '100%' }}
                    floatingLabelText="Available from"
                    errorText="Available from"
                    hintText="Available from"
                    container="inline"
                    autoOk
                    value={this.state.fields.availableFrom}
                    onChange={(x, d) => { this.setState({ fields: { ...this.state.fields, availableFrom: d } }); }}
                  />

                  <DatePicker
                    textFieldStyle={{ width: '100%' }}
                    floatingLabelText="Available to"
                    errorText="Available to"
                    hintText="Available to"
                    container="inline"
                    autoOk
                    value={this.state.fields.availableTo}
                    onChange={(x, d) => { this.setState({ fields: { ...this.state.fields, availableTo: d } }); }}
                  />
                </div>

                <TextField
                  style={styles.textField}
                  name="pricePerHour"
                  hintText="Price per hour"
                  errorText="Price per hour"
                  floatingLabelText="Price per hour"
                  value={this.state.fields.pricePerHour}
                  onChange={this.handleTextFieldChange.bind(this)}
                />

                <TextField
                  style={styles.textField}
                  name="additionalInformation"
                  hintText="Additional Information"
                  floatingLabelText="Additional Information"
                  multiLine
                  rows={3}
                  value={this.state.fields.additionalInformation}
                  onChange={this.handleTextFieldChange.bind(this)}
                />

                <RaisedButton
                  // backgroundColor="rgb(183, 28, 28)"
                  // labelColor="white"
                  label="Submit"
                  onClick={(e) => { e.preventDefault(); this.handleSubmit(); }}
                />
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

NewShareSpot.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
};

export default NewShareSpot;
