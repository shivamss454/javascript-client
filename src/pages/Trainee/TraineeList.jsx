import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FormDialog, Table } from './Components/index';
import trainee from './data/trainee';

const useStyles = (theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(-3),
    marginBottom: theme.spacing(2),
  },
  buttonPosition: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

class Trainee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true }, () => {
    });
  }

  handleClickClose = () => {
    this.setState({ open: false }, () => {
    });
  }

  handleSubmit = (data) => {
    this.setState({ open: false }, () => {
      console.log(data);
    });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.paper}>
        <div className={classes.buttonPosition}>
          <Button type="button" color="primary" className={classes.button} variant="outlined" onClick={this.handleClickOpen}>
            Add TraineeList
          </Button>
        </div>
        <FormDialog open={open} onClose={this.handleClickClose} onSubmit={() => this.handleSubmit} />
        <Table
          id="id"
          data={trainee}
          columns={
            [
              {
                field: 'name',
                label: 'Name',
                align: 'center',
              },
              {
                field: 'email',
                label: 'Email Address',
              },
            ]
          }
        />
        <ul>
          {
            trainee && trainee.length && trainee.map((data) => (
              <li>
                <Link to={`/Trainee/${data.id}`}>{data.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
Trainee.propTypes = {
  classes: PropTypes.func.isRequired,
};
export default withStyles(useStyles)(Trainee);
