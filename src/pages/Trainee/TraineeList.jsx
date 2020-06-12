import React from 'react';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import localStorage from 'local-storage';
import {
  FormDialog, EditDialog, RemoveDialog,
} from './Components/index';
import EnhancedTable from './Components/Table/Table';
import callAPI from '../../libs/utils/api';

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
      message: '',
      count: 0,
      loading: true,
      editdialog: false,
      removedialog: false,
      newData: {},
      rowdata: [],
      page: 0,
      rowsPerPage: 20,
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
    console.log('inside nandle changepage newPage =', newpage);
    this.componentDidMount(newpage);
    this.setState({ page: newpage, loading: true });
  }

  handleRowsPerPage = (event) => {
    this.componentDidMount();
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

  componentDidMount = (newpage) => {
    console.log('inside component did mount', newpage);
    const { rowsPerPage } = this.state;
    const { value } = this.context;

    callAPI(
      'get',
      '/trainee',
      {
        params: { skip: newpage * rowsPerPage, limit: newpage * rowsPerPage + rowsPerPage },
        headers: {
          Authorization: localStorage.get('token'),
        },
      },
    ).then((res) => {
      if (res.data === 'undefined') {
        this.setState({ loading: false, message: 'this is an error message' }, () => {
          const { message } = this.state;
          value.opensnackbar(message, 'error');
        });
      } else {
        console.log('response from /trainee', res);
        this.setState({ rowdata: res.data.records, count: res.data.count, loading: false });
      }
    }).catch((error) => {
      console.log(error.message);
    });
  }

  render() {
    const { classes } = this.props;
    const {
      open, order, orderBy, page, rowsPerPage, editdialog,
      removedialog, newData, count, rowdata, loading,
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
        <EnhancedTable
          id="table"
          data={rowdata}
          columns={
            [
              {
                field: 'name',
                label: 'Name',
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
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleRowsPerPage}
          loading={loading}
        />
      </div>
    );
  }
}
Trainee.propTypes = {
  classes: PropTypes.func.isRequired,
};
export default withStyles(useStyles)(Trainee);
