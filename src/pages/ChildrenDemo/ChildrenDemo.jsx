import React from 'react';
import { Typography, ThemeProvider } from '@material-ui/core';
import Math from '../../components/Math/Math';
import Theme from '../../theme';

export default class ChildrenDemo extends React.Component {
  result() {
    let { result } = this.state;
    result = '';
    this.setState({ result });
  }

  render() {
    return (
      <>
        <Math first={7} second={3} operator="+" />
        <Math first={5} second={4} operator="-" />
        <Math first={3} second={10} operator="*" />
        <Math first={7} second={0} operator="/" />
        <Math first={7} second={9} operator="^" />
        <Math first={7} second={9} operator="+">
          {
            (first, second, result) => (
              <p>
                sum of
                {' '}
                {first}
                {' '}
                and
                {' '}
                {second}
                {' '}
                =
                {' '}
                {result}
              </p>
            )
          }
        </Math>
        <ThemeProvider theme={Theme}>
          <Typography>
            <Math first={7} second={9} operator="+">
              {
                (first, second, result) => (
                  <p>
                    sum of
                    {' '}
                    {first}
                    {' '}
                    and
                    {' '}
                    {second}
                    {' '}
                    =
                    {' '}
                    {result}
                  </p>
                )
              }
            </Math>
          </Typography>
        </ThemeProvider>
      </>
    );
  }
}
