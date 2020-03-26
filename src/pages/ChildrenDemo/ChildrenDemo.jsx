import React, { Component } from 'react';
import { Typography, ThemeProvider } from '@material-ui/core';
import Math from '../../components/Math/Math';
import Theme from '../../theme';

class ChildrenDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

children = (first, second, operator, result) => {
  switch (operator) {
  case '+': {
    return (
      <p>
        Sum of
        {' '}
        {' '}
        {first}
        {' '}
        {' '}
        and
        {' '}
        {second}
        {' '}
        is
        {' '}
        {' '}
        {result}
      </p>
    );
  }
  case '-': {
    return (
      <p>
        Subtraction of
        {' '}
        {' '}
        { first }
        {' '}
        and
        {' '}
        {second}
        {' '}
        is
        {' '}
        {' '}
        {result}
      </p>
    );
  }
  case '*': {
    return (
      <p>
        Multiplication of
        {' '}
        {' '}
        {' '}
        {first}
        {' '}
        and
        {' '}
        {' '}
        {second}
        {' '}
        is
        {' '}
        {' '}
        {result}
      </p>
    );
  }
  case '/': {
    return (
      <p>
        Division of
        {' '}
        {' '}
        {first}
        {' '}
        and
        {' '}
        {second}
        {' '}
        is
        {' '}
        {' '}
        {result}
      </p>
    );
  }
  default: {
    return (
      <p>
        {' '}
        {' '}
        {first}
        {' '}
        {operator}
        {' '}
        {second}
        {' '}
        is
        {' '}
        {' '}
        {result}
      </p>
    );
  }
  }
}

render() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Typography>
          <Math first={7} second={4} operator="+">{this.children}</Math>
          <Math first={7} second={3} operator="-">{this.children}</Math>
          <Math first={7} second={4} operator="*">{this.children}</Math>
          <Math first={7} second={4} operator="/">{this.children}</Math>
          <Math first={7} second={0} operator="/" />
          <Math first={7} second={4} operator="^" />
        </Typography>
      </ThemeProvider>
    </>
  );
}
}
export default ChildrenDemo;
