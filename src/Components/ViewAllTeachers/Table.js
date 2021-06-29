import React, {useState} from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import {makeStyles} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Button from "@material-ui/core/Button";
import Filter from "./Filter"

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(id, name, email, salary, course, details) {
  return { id, name, email, salary, course, details };
}

const rows = [
  createData(1, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(
    2,
    "Muhammad Ammar Sohail Siddiqui",
    "muhammadammarsohailsiddiqui@gmail.com",
    "200USD",
    "Javascript"
  ),
  createData(3, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(4, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(5, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(6, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(7, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(8, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(9, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(10, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(11, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(12, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(13, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(14, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(15, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
  createData(16, "Fahad", "faleem396@gmail.com", "200USD", "Javascript"),
];

const useStyles2 = makeStyles(theme=>({
    table: {
      minWidth: 1000,
      '& tbody tr td':{
          fontSize:"16px !important",
      },
      
    },
    tableHead:{
        backgroundColor:"#29524A",
        '& th':{
              color:"white",
              fontSize:"16px"
        }
    },
    viewDetailsBtn:{
        backgroundColor:"#29524A",
        boxShadow:"none"
    }
  }));

export default function TeachersTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} elevation={1}>
        <Filter />
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead className={classes.tableHead}>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Salary</TableCell>
          <TableCell>Courses</TableCell>
          <TableCell>Details</TableCell>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{ width: 50 }}>
                {row.id}
              </TableCell>
              <TableCell style={{ width: 200 }}>{row.name}</TableCell>
              <TableCell style={{ width: 260 }}>{row.email}</TableCell>
              <TableCell style={{ width: 150 }}>{row.salary}</TableCell>
              <TableCell style={{ width: 200 }}>{row.course}</TableCell>
              <TableCell style={{ width: 160 }}>
                <Button variant="contained" color="primary" className={classes.viewDetailsBtn}>
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: false,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
