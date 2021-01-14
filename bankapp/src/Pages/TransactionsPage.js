import React, { Component } from 'react'
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import UsersTable from "../Components/UsersTable"
import AllTransactions from "../Components/AllTransactions"
import axios from "axios"

export default class TransactionsPage extends Component {
    state ={
      transactions:null
    }

    componentDidMount() {
        axios
        .get("http://localhost:8080/transaction/all")
        .then((res) => {
          console.log(res.data);
          this.setState({
              transactions:res.data
          })
        
        })
        .catch((err) => console.error(err));
  
    }
    render() {
        return (
            <div style={{ margin: "0 auto", maxWidth: "1000px",height:'100vh',background:"#edf6f9" }}>
                <a href="/" style={{textDecoration:"none"}}>
        <h1 style={{ textAlign: "center" }}>Recent Activity</h1>
        </a>
        <Divider />
        <AllTransactions transactions={this.state.transactions}/>
      
        </div>
        )
    }
}