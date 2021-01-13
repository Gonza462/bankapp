import React, { Component } from 'react'
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import UsersTable from "../Components/UsersTable"

export default class CreateUser extends Component {
    render() {
        return (
            <div style={{ margin: "0 auto", maxWidth: "1000px",height:'100vh',background:"#edf6f9" }}>
        <h1 style={{ textAlign: "center" }}>View Users</h1>
        <Divider />
        <UsersTable/>
        </div>
        )
    }
}