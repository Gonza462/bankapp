import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { SettingsBackupRestoreSharp } from "@material-ui/icons";
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(
  userId,
  name,
  lastName,
  email,
  phone,
  deletes,
  edit,
  price
) {
  // axios
  // .get("http://localhost:8080/user/all")
  // .then((res) => {
  //   console.log(res.data);
  //   // console.log(this.getUsers)

  // })
  // .catch((err) => console.error(err));

  return {
    userId,
    name,
    lastName,
    email,
    phone,
    price,

    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
    edit,
    deletes,
  };
}
const handleClick = (e, name) => {
  console.log("hello");
  console.log(name);
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  // useEffect(() => {
  //   let mounted = true;
  //    axios
  // .get("http://localhost:8080/user/all")
  // .then((res) => {
  //   console.log(res)

  //   setUser(res)
  //   // console.log(this.getUsers)

  // })
  // .catch((err) => console.error(err));
  //   return () => mounted = false;
  // }, [])

  console.log(row);
  //console.log(getUsers);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.idUser}
        </TableCell>
        <TableCell align="right">{row.firstName}</TableCell>
        <TableCell align="right">{row.lastName}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
        <TableCell align="right">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={`/edit/${row.firstName}`}
          >
            {" "}
            <Button
              onClick={(e) => {
                handleClick(e, row.firstName);
              }}
              style={{
                background: "black",
                color: "white",
                marginRight: "-20px",
              }}
            >
              edit
            </Button>{" "}
          </a>
        </TableCell>

        <TableCell align="right">
          <Button
            style={{
              background: "#f12323",
              color: "white",
              marginRight: "-11px",
            }}
          >
            delete
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Transaction History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Transaction ID</TableCell>
                    <TableCell>Account ID</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[].map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    deletes: PropTypes.string.isRequired,
    edit: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    lastName: PropTypes.string.isRequired,
    deletes: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "1",
    "Luis",
    "Gonzalez",
    "gonza@uwm.edu",
    "262-729-7384",
    "Button",
    "Button",
    1
  ),
  createData(
    "2",
    "John",
    "Doe",
    "idk@uwm.edu",
    "262-729-9999",
    "Button",
    "Button",
    1
  ),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  //   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  //   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
//const users = [];

//console.log(users);

export default function CollapsibleTable() {
  console.log(rows);
  // console.log(getUsers)
  const [getUsers, setUser] = React.useState([]);

  useEffect(() => {
    let mounted = true;
    axios
      .get("http://localhost:8080/user/all")
      .then((res) => {
        console.log(res);
        //users = res.data

        setUser(res.data);
        //console.log(this.getUsers)
      })
      .catch((err) => console.error(err));
    return () => (mounted = false);
  }, []);

  return (
    console.log(getUsers),
    (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell >Date</TableCell>
              <TableCell align="right">User ID</TableCell>
              <TableCell align="right">Transaction ID</TableCell>
              <TableCell align="right">Account ID</TableCell>
              <TableCell align="right">Type</TableCell>

              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {getUsers.map((row) => (
            console.log(row),
            <Row key={row.name} row={row} />
          ))} */}
            {[].map((user) => (
              <Row key={user.firstName} row={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}