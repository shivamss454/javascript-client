import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import {
  DialogActions, DialogContent, DialogContentText, Button, Dialog, DialogTitle, withStyles,
} from '@material-ui/core';
import { MyContext } from '../../../../contexts';

const useStyles = () => ({
  root: {
    flexGrow: 1,
  },
});
class RemoveDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleSnackbar = (data, opensnackbar) => {
    const date = '2019-02-14T18:15:11.778Z';
    const isAfter = (moment(data.createdAt).isAfter(date));
    if (isAfter) {
      this.setState({
        message: 'This is a success Message! ',
      }, () => {
        const { message } = this.state;
        opensnackbar(message, 'success');
      });
    } else {
      this.setState({
        message: 'This is an error Message!',
      }, () => {
        const { message } = this.state;
        opensnackbar(message, 'error');
      });
    }
  }

  render() {
    const {
      open, onClose, onSubmit, classes, data,
    } = this.props;
    return (
      <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" className={classes.root} fullWidth>
          <DialogTitle id="form-dialog-title">Remove Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you really want to remove the trainee?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <MyContext.Consumer>
              {
                ({ opensnackbar }) => (
                  <Button
                    onClick={() => {
                      this.handleSnackbar(data, opensnackbar);
                      onSubmit(data);
                    }}
                    color="primary"
                  >
                    Delete
                  </Button>
                )
              }
            </MyContext.Consumer>

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
RemoveDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.Object).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default withStyles(useStyles)(RemoveDialog);
