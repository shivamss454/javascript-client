/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {
  DialogActions, DialogContent, DialogContentText, Grid, InputAdornment, Button,
  TextField, Dialog, DialogTitle,
} from '@material-ui/core';
import { getError, hasErrors, handleData, isTouched } from '../../HelperTrainee';

class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      touch: {
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
      },
    };
  }

  render() {
    const { open, onClose, onSubmit } = this.props;
    const {
      name, email, password,
    } = this.state;
    return (
      <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter Your Trainee Details.
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="Name"
                  label="Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon style={{ fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  onChange={this.handleData('name')}
                  helperText={this.getError('name', this.state)}
                  onBlur={() => this.isTouched('name', this.state)}
                  error={this.getError('name', this.state)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon style={{ fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  error={this.getError('email', this.state)}
                  onChange={this.handleData('email')}
                  onBlur={() => this.isTouched('email', this.state)}
                  helperText={this.getError('email', this.state)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-start-adornment"
                  label="password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VisibilityOffIcon style={{ fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  error={this.getError('password', this.state)}
                  onChange={this.handleData('password')}
                  onBlur={() => this.isTouched('password', this.state)}
                  helperText={this.getError('password', this.state)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="password"
                  type="password"
                  label="confirm password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VisibilityOffIcon style={{ fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  error={this.getError('confirmPassword', this.state)}
                  onChange={this.handleData('confirmPassword')}
                  onBlur={() => this.isTouched('confirmPassword', this.state)}
                  helperText={this.getError('confirmPassword', this.state)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => onSubmit()({
                name, email, password,
              })}

              color="primary"
              disabled={this.hasErrors()}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default FormDialog;
