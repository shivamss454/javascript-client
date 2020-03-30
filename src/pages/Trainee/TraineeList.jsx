import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormDialog from './Components/AddDialogue/AddDialogue';
import Table from './Components/Table/Table';
import trainee from './data/trainee';

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(-1, 0, -3),
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
      <>
        <div className={classes.root}>
          <Button type="button" color="primary" variant="outlined" onClick={this.handleClickOpen}>
            Add Trainee
          </Button>
        </div>
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
        <FormDialog open={open} onClose={this.handleClickClose} onSubmit={() => this.handleSubmit} />
        <ul>
          {
            trainee && trainee.length && trainee.map((data) => (
              <li>
                <Link to={`/Trainee/${data.id}`}>{data.name}</Link>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}
Trainee.propTypes = {
  classes: PropTypes.func.isRequired,
};
export default withStyles(useStyles)(Trainee);
