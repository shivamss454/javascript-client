import React from 'react';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FormDialog, EditDialog, RemoveDialog } from './Components/index';
import Table from './Components/Table/Table';
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
      editdialog: false,
      removedialog: false,
      newData: {},
      page: 0,
      rowsPerPage: 3,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true }, () => {
    });
  }

  handleClickClose = () => {
    this.setState({ open: false, editdialog: false, removedialog: false }, () => {
    });
  }

  handleSubmit = (data) => {
    this.setState({ open: false, editdialog: false, removedialog: false }, () => {
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

  handleChangePage = (event, newpage) => {
    this.setState({ page: newpage });
  }

  handleRowsPerPage = (event) => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  }

  handleSelect = (event, data) => {
    this.setState({ selected: event.target.value }, () => console.log(data));
  };

  handleEditDialogOpen = (data) => {
    this.setState({ editdialog: true, newData: data });
  }

  handleRemoveDialogOpen = (data) => {
    this.setState({ removedialog: true, newData: data });
  }

  Format = (date) => moment(date).format('dddd, MMMM do YYYY, h:mm:ss a')

  Convert = (email) => email.toUpperCase()

  render() {
    const { classes } = this.props;
    const {
      open, order, orderBy, page, rowsPerPage, editdialog, removedialog, newData,
    } = this.state;
    console.log(this.state);
    return (
      <div className={classes.paper}>
        <div className={classes.buttonPosition}>
          <Button type="button" color="primary" className={classes.button} variant="outlined" onClick={this.handleClickOpen}>
            Add TraineeList
          </Button>
        </div>
        <FormDialog
          data={newData}
          open={open}
          onClose={this.handleClickClose}
          onSubmit={() => this.handleSubmit}
        />
        <EditDialog
          open={editdialog}
          onClose={this.handleClickClose}
          onSubmit={this.handleSubmit}
          data={newData}
        />
        <RemoveDialog
          open={removedialog}
          onClose={this.handleClickClose}
          onSubmit={this.handleSubmit}
          data={newData}
        />
        <Table
          id="id"
          data={trainee}
          columns={
            [
              {
                field: 'name',
                label: 'Name',
              },
              {
                field: 'email',
                label: 'Email Address',
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
          actions={[
            {
              icon: <EditIcon />,
              handler: this.handleEditDialogOpen,
            },
            {
              icon: <DeleteIcon />,
              handler: this.handleRemoveDialogOpen,
            },
          ]}
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
          count={100}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleRowsPerPage}
        />
      </div>
    );
  }
}
Trainee.propTypes = {
  classes: PropTypes.func.isRequired,
};
export default withStyles(useStyles)(Trainee);
