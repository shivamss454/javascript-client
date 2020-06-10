import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableContainer,
  TableSortLabel, TableHead, TableRow, TablePagination, Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    '& tbody>.MuiTableRow-root:hover': {
      background: 'lightgrey',
      cursor: 'pointer',
    },
  },
  column: {
    color: 'grey',
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function SimpleTable(props) {
  const {
    id, data, columns, order, orderBy, onSort, onSelect,
    actions, page, rowsPerPage, onChangePage, onChangeRowsPerPage,
  } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.Container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <>
              {
                columns && columns.length && columns.map(({ align, label, field }) => (

                  <TableCell align={align} className={classes.column}>
                    <TableSortLabel
                      align={align}
                      active={orderBy === field}
                      direction={orderBy === field ? order : 'asc'}
                      onClick={onSort(field)}
                    >
                      {label}
                    </TableSortLabel>
                  </TableCell>
                ))
              }
            </>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((ele) => (
            <StyledTableRow hover key={ele[id]}>
              {
                columns && columns.length && columns.map(({ field, align, format }) => (

                  <StyledTableCell
                    align={align}
                    format={format}
                    onClick={(event) => onSelect(event, ele.name)}
                    component="th"
                    scope="row"
                  >
                    {format !== undefined ? format(ele[field]) : ele[field]}

                  </StyledTableCell>
                ))
              }
              {actions && actions.length && actions.map(({ icon, handler }) => (
                <TableCell onClick={() => handler(ele)}>
                  {icon}
                </TableCell>
              ))}
            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
      <TablePagination
        component="div"
        rowsPerPageOptions={[3, 5, 7, 10, 20, { label: 'All', value: -1 }]}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </TableContainer>
  );
}
SimpleTable.propTypes = {
  id: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.oneOf(['asc', 'desc']),
  orderBy: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
  onChangeRowsPerPage: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
SimpleTable.defaultProps = {
  orderBy: '',
  order: 'asc',
  page: 0,
  rowsPerPage: 100,
};
