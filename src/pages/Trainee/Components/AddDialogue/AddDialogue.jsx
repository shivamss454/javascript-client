/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';

const Schema = yup.object().shape({
  name: yup.string().required('name is required field').min(3),
  email: yup.string().email().required('email is required '),
  password: yup.string().required('password is required ')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'must contain 8 character, atleast one uppercase letter,one lowercase letter and one number'),
  confirmPassword: yup.string().required('confirm password is required')
    .oneOf([yup.ref('password'), null], 'password must match'),
});
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

  getError = (key) => {
    const { touch } = this.state;

    if (touch[key] && this.hasErrors()) {
      try {
        Schema.validateSyncAt(key, this.state);
      } catch (err) {
        return err.message;
      }
    }
    return false;
  }

  hasErrors = () => {
    try {
      Schema.validateSync(this.state);
    } catch (err) {
      return true;
    }
    return false;
  }

  isTouched = (key) => {
    const { touch } = this.state;
    this.setState({ touch: { ...touch, [key]: true } });
  }

  handleData = (data) => (event) => {
    this.setState({ [data]: event.target.value });
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
                  helperText={this.getError('name')}
                  onBlur={() => this.isTouched('name')}
                  error={this.getError('name')}
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
                  error={this.getError('email')}
                  onChange={this.handleData('email')}
                  onBlur={() => this.isTouched('email')}
                  helperText={this.getError('email')}
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
                  error={this.getError('password')}
                  onChange={this.handleData('password')}
                  onBlur={() => this.isTouched('password')}
                  helperText={this.getError('password')}
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
                  error={this.getError('confirmPassword')}
                  onChange={this.handleData('confirmPassword')}
                  onBlur={() => this.isTouched('confirmPassword')}
                  helperText={this.getError('confirmPassword')}
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
