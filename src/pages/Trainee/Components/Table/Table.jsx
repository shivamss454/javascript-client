import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  column: {
    color: 'grey',
  },
});


export default function SimpleTable(props) {
  const { id, data, columns } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.Container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              columns && columns.length && columns.map(({ align, label }) => (

                <TableCell align={align} className={classes.column}>
                  {label}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((ele) => (
            <TableRow key={ele[id]}>
              {
                columns && columns.length && columns.map(({ field, align }) => (

                  <TableCell align={align} component="th" scope="row">
                    {ele[field]}
                  </TableCell>
                ))
              }

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
SimpleTable.propTypes = {
  id: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
