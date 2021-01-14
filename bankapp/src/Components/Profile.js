import React, { Component, Fragment } from 'react'
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { DialogTitle, Typography } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton"
import EditIcon from "@material-ui/icons/Edit"
import Dialog from"@material-ui/core/Dialog";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import Button from "@material-ui/core/Button";
import axios from "axios";
class Profile extends Component {

    state = {
        UserHandle:"",
        userID:"",
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        open:false,
        checkingBalance:0,
        checkingID:0,
        savingsBalance:0,
        savingsID:0,
        depositAmount:null,
        depositSavings:null,
        withdrawSavings:null,
        withdrawCheckings:null

    }
    mapUserDetailsToState = (details) => {
       console.log(details.user)
      this.setState({
        firstName:details.user.firstName, 
        email: details.user.email,
        phone: details.user.phone,
        userID:details.user.userID
      })
    }
    componentDidMount(){
      //get user details
      console.log(this.props)
     


    }
    componentWillReceiveProps(nextProps){
      console.log(nextProps.user)
        this.setState({
            UserHandle:nextProps.user.userID,
            phone:nextProps.user.phone,
            email:nextProps.user.email,
            firstName: nextProps.user.firstName,
            lastName: nextProps.user.lastName,
            userID:nextProps.user.userID
        })

        axios.get('http://localhost:8080/accountUser/'+nextProps.user.userID).then(res => {
          console.log(res.data)
          this.setState({
            checkingBalance:res.data[0].balance,
            checkingID: res.data[0].idAccount,
            savingsBalance:res.data[1].balance,
            savingsID:res.data[1].idAccount
          
          })
        }).catch( err=> {
          console.log(err)
        })
       
    }
    handleClick = (event) => {
      const deposit = {
        amount:this.state.depositAmount,
        transactionType_name:"Deposit"
      }

      axios.post('http://localhost:8080/transaction/'+this.state.checkingID,deposit).then(res => {
        console.log(res)
      }).catch( err=> {
        console.log(err)
      })
      window.location.reload()
      console.log(this.state.depositAmount)
    }
    handleClickSavings = (event) => {
      const deposit = {
        amount:this.state.depositSavings,
        transactionType_name:"Deposit"
      }
      console.log(this.state.savingsID)
      console.log(this.state.depositSavings)

      axios.post('http://localhost:8080/transaction/'+this.state.savingsID,deposit).then(res => {
        console.log(res)
      }).catch( err=> {
        console.log(err)
      })
     window.location.reload()
     // console.log(this.state.depositAmount)
    }
    handleClickWithdrawCheckings = (event) => {
      const withdraw = {
        amount:this.state.withdrawCheckings,
        transactionType_name:"Withdrawal"
      }
      //console.log(this.state.savingsID)

      axios.post('http://localhost:8080/transaction/'+this.state.checkingID,withdraw).then(res => {
        console.log(res)
      }).catch( err=> {
        console.log(err)
      })
     window.location.reload()
     // console.log(this.state.depositAmount)
    }

    handleClickWithdrawSavings = (event) => {
      const withdraw = {
        amount:this.state.withdrawSavings,
        transactionType_name:"Withdrawal"
      }
      //console.log(this.state.savingsID)

      axios.post('http://localhost:8080/transaction/'+this.state.savingsID,withdraw).then(res => {
        console.log(res)
      }).catch( err=> {
        console.log(err)
      })
     window.location.reload()
     // console.log(this.state.depositAmount)
    }

    handleOpen =()=>{
      this.setState({
        open:true
      })
      console.log(this.props)
      this.mapUserDetailsToState(this.props);
    }
    handleClose = () => {
      this.setState({
        open:false
      })
    }
    handleChange=(event) => {
      this.setState({
        [event.target.name]:event.target.value
      })
    }
    handleSubmit = () => {
      const userDetails ={
        firstName:this.state.firstName,
        lastName: this.state.lastName,
        phone:this.state.phone,
        email:this.state.email

      }
      //call function to edit user 
      axios.put('http://localhost:8080/user/'+this.state.userID,userDetails).then(res => {
        console.log(res)
      }).catch( err=> {
        console.log(err)
      })
      //close dialog
      this.handleClose()
    }
    render() {
        return (
            <div style={{display:'flex',paddingTop:"10px",paddingLeft:'25px', paddingBottom:"35px"}}>
            <div>
              <Fragment>
           <Paper style={{height:"100%",width:"95%", display:"flex"}}>
               <img src="/unnamed.jpg" style={{width:"50%"}}/>
               <div style={{paddingLeft:15,paddingTop:15}}>
              <Typography style={{paddingTop:10}}>Name: {this.state.firstName}{" "} {this.state.lastName}</Typography>
            
              <Typography style={{paddingTop:10}}>User ID: {this.state.userID} </Typography>
              <Typography style={{paddingTop:10}}>Phone: {this.state.phone} </Typography>
              <Typography style={{paddingTop:10}}>Email: {this.state.email} </Typography>
              <div style={{ marginTop:"22vh"}}>
                <Tooltip title="Edit details" placement="top">
              <IconButton  onClick={this.handleOpen} >
                <EditIcon  style={{color:"#088fef"}}/>
              </IconButton>
              </Tooltip>
              </div>
               </div>
           </Paper>

           <Dialog
           open={this.state.open}
           onClose = {this.handleClose}
           fullWidth
           maxWidth="sm">
             <DialogTitle>Edit User Details</DialogTitle>
             <DialogContent>
               <form>
                 <TextField
                 name="firstName"
                 type="text"
                 label="first name"
                 multiline
                 rows="3"
                 placeholder="Full Name"
                 value={this.state.firstName}
                 onChange={this.handleChange}
                 fullWidth>

                 </TextField>
                 <TextField
                 name="lastName"
                 type="text"
                 label="last name"
                
                 placeholder="last name"
                 value={this.state.lastName}
                 onChange={this.handleChange}
                 fullWidth>

                 </TextField>
                 <TextField
                 name="phone"
                 type="text"
                 label="phone"
                
                 placeholder="phone number"
                 value={this.state.phone}
                 onChange={this.handleChange}
                 fullWidth>

                 </TextField>
                 <TextField
                 name="email"
                 type="text"
                 label="email"
                
                 placeholder="email address"
                 value={this.state.email}
                 onChange={this.handleChange}
                 fullWidth>

                 </TextField>
                 
               </form>
             </DialogContent>
             <DialogActions>
               <Button onClick={this.handleClose} color="primary">
                 Cancel
               </Button>
               <Button onClick={this.handleSubmit} color="primary">
                 Save
               </Button>
             </DialogActions>

           </Dialog>
           
           </Fragment>
           </div>
           
           <Paper
              onClick={(e) => {
                // this.addCart(e, item);
              }}
              style={{
             
                marginBottom: 0,
                borderRadius: 0,
                width: "40%",
                height:'10%',
                background:"#80808000"
              }}
            >
              <Card
                style={{ marginBottom: 8, borderRadius: 0 }}
              >
                 <form style={{flexWrap:"nowrap"}}>
                 <TextField
                 name="depositAmount"
                 type="text"
                 label="deposit"
                
                 placeholder="Deposit"
                 value={this.state.depositAmount}
                 onChange={this.handleChange}
                 fullWidth>
                 </TextField>
                 <Button style={{marginBottom:"-4vh"}} onClick={this.handleClick}>submit</Button>
                 </form >
                 <form style={{flexWrap:"nowrap"}}>
                 <TextField
                 name="withdrawCheckings"
                 type="text"
                 label="withdraw"
                
                 placeholder="Withdraw"
                 value={this.state.withdrawCheckings}
                 onChange={this.handleChange}
                 fullWidth>
                 </TextField>
                 <Button style={{marginBottom:"-4vh"}} onClick={this.handleClickWithdrawCheckings}>submit</Button>
                 </form >
                 
                <img
                  style={{
                    marginLeft: "1vw",
                    maxHeight: "50px",
                    paddingTop:"10px"
                    
                  }}
                  src={"/credit-card.png"}
                />
               




                <img style={{width:"7%",marginLeft:"69%"}}src={"/right-arrow.png"}/>
                <CardContent
                  style={{ paddingBottom: "0px", minHeight: "40px" }}
                >
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    {"Checkings"}
                  </Typography>
                
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      fontFamily:
                        "DD-TTNorms, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                    }}
                  >Balance: ${this.state.checkingBalance}</Typography>
                </CardContent>
              </Card>

              <Card
                style={{  marginBottom: 0, borderRadius: 0 }}
              >
                  <form style={{flexWrap:"nowrap"}}>
                 <TextField
                 name="depositSavings"
                 type="text"
                 label="deposit"
                
                 placeholder="Deposit"
                 value={this.state.depositSavings}
                 onChange={this.handleChange}
                 fullWidth>
                 </TextField>
                 <Button style={{marginBottom:"-4vh"}}onClick={this.handleClickSavings}>submit</Button>
                 </form >

                 <form style={{flexWrap:"nowrap"}}>
                 <TextField
                 name="withdrawSavings"
                 type="text"
                 label="withdraw"
                
                 placeholder="Withdraw"
                 value={this.state.withdrawSavings}
                 onChange={this.handleChange}
                 fullWidth>
                 </TextField>
                 <Button style={{marginBottom:"-4vh"}} onClick={this.handleClickWithdrawSavings}>submit</Button>
                 </form >
                <img
                  style={{
                    marginLeft: "1vw",
                    maxHeight: "50px",
                    paddingTop:"10px"
                   
                  }}
                  src={"/money-bag.png"}
                />
               


                  <img style={{width:"7%",marginLeft:"69%"}}src={"/right-arrow.png"}/>
                <CardContent
                  style={{ paddingBottom: "0px", minHeight: "40px" }}
                >
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    {"Savings"}
                  </Typography>
                
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      fontFamily:
                        "DD-TTNorms, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                    }}
                  > Balance: ${this.state.savingsBalance} </Typography>
                </CardContent>
              </Card>
              
              
            </Paper>
            
           </div>
        )
    }
}

const mapStateToProps = (state) => (

    console.log(state),
    {
 
    
  });

export default connect(mapStateToProps)(Profile)