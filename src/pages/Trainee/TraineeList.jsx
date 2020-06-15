import React from 'react';
import * as moment from 'moment';
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
      order: '',
      orderBy: '',
      selected: '',
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

  handleSort = (field) => () => {
    const { order } = this.state;
    this.setState({
      orderBy: field,
      order: order === 'asc' ? 'desc' : 'asc',
    });
  }

  handleSelect = (event, data) => {
    this.setState({ selected: event.target.value }, () => console.log(data));
  };

  Format = (date) => moment(date).format('dddd, MMMM do YYYY, h:mm:ss a')

  Convert = (email) => email.toUpperCase()

  render() {
    const { classes } = this.props;
    const { open, order, orderBy } = this.state;
    console.log(this.state);
    return (
      <div className={classes.paper}>
        <div className={classes.buttonPosition}>
          <Button type="button" color="primary" className={classes.button} variant="outlined" onClick={this.handleClickOpen}>
            Add TraineeList
          </Button>
        </div>
        <FormDialog open={open} onClose={this.handleClickClose} onSubmit={() => this.handleSubmit} />
        <Table
          id="table"
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
                align: 'left',
                format: (value) => value && value.toUpperCase(),
              },
              {
                field: 'createdAt',
                label: 'Date',
                align: 'right',
                format: this.Format,
              },
            ]
          }
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
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
  order: PropTypes.oneOf(['asc', 'desc']),
  orderBy: PropTypes.string,
};
Trainee.defaultProps = {
  order: 'asc',
  orderBy: '',
};
export default withStyles(useStyles)(Trainee);
