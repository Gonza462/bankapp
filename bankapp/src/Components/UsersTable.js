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
            href={`/edit/${row.idUser}`}
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

       
      </TableRow>
      <TableRow>
       
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
              <TableCell>User ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {getUsers.map((row) => (
            console.log(row),
            <Row key={row.name} row={row} />
          ))} */}
            {getUsers.map((user) => (
              <Row key={user.firstName} row={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}
