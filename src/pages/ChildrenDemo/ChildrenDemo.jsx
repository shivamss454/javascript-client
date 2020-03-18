/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';
import { Typography } from '@material-ui/core';
import Math from '../../components/Math/Math';

export default class ChildrenDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
    };
  }

  render() {
    return (
      <>
        <Typography>
          {' '}
          <Math first="9" second="8" />
          {' '}
        </Typography>

      </>
    );
  }
}
