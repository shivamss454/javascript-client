import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
