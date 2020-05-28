import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormDialog from './Components/AddDialogue/AddDialogue';
import trainee from './data/trainee';

export default class Trainee extends React.Component {
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
    const { open } = this.state;
    return (
      <>
        <Button type="button" color="primary" variant="outlined" onClick={this.handleClickOpen}>
          Add Trainee
        </Button>
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
