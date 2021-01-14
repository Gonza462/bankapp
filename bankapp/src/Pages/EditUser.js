import React, { Component } from 'react'
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EditAccount from '../Components/EditAccount'
import Typography from '@material-ui/core/Typography';
import TransactionsTable from "../Components/TransactionsTable"
import axios from "axios";
 class EditUser extends Component {
    
    state ={
        handle:null,
        userID:null,
    }

    componentDidMount() {
        //pass in user details to edit account
        //get request by userID
      
        const userID = this.props.match.params.handle;
        this.setState({
            userID:userID
        })
        axios
        .get("http://localhost:8080/user/"+userID)
        .then((res) => {
          console.log(res.data);
          this.setState({
              phone:res.data.phone,
              email:res.data.email,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              idUser: res.data.idUser
          })
        })
        .catch((err) => console.error(err));
  

    }
    render() {
        return (
            <div style={{ margin: "0 auto", maxWidth: "1000px",height:'100vh',background:"#edf6f9" }}>
                <a href = "/" style={{textDecoration:"none"}}>
        <h1 style={{ textAlign: "center" }}>Account Summary</h1>
        </a>
        <Divider />
        <EditAccount handle={this.state.handle} firstName={this.state.firstName} lastName= {this.state.lastName} email={this.state.email} phone={this.state.phone} userID={this.state.userID} />
        <Typography variant="h5" style={{textAlign:"center"}}> Transaction History</Typography>
        <TransactionsTable userID={this.state.userID}/>
     
        </div>
        )
    }
}

const mapStateToProps = (state) => (

    console.log(state),
    {
    // data:state.data,
    
  });
//   user.propTypes = {
//     // data:PropTypes.object.isRequired
//     user: PropTypes.object.isRequired,
//   };
export default connect(mapStateToProps)(EditUser)