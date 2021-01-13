import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { Typography } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class Profile extends Component {

    state = {
        UserHandle:""
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            UserHandle:nextProps.handle
        })
       
    }
    render() {
        return (
            <div style={{display:'flex',paddingTop:"10px",paddingLeft:'25px'}}>
            <div>
           <Paper style={{width:"95%", display:"flex"}}>
               <img src="/unnamed.jpg" style={{width:"50%"}}/>
               <div>
              <Typography style={{}}>{this.state.UserHandle}</Typography>
              <Typography style={{}}>User Id</Typography>
              <Typography style={{}}>Phone</Typography>
              <Typography style={{}}>Email</Typography>
               </div>
           </Paper>
           
           
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
                <img
                  style={{
                    marginLeft: "1vw",
                    maxHeight: "50px",
                    marginTop: "4vh",
                  }}
                  src={""}
                />
                <CardContent
                  style={{ paddingBottom: "0px", minHeight: "7vh" }}
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
                  ></Typography>
                </CardContent>
              </Card>

              <Card
                style={{  marginBottom: 0, borderRadius: 0 }}
              >
                <img
                  style={{
                    marginLeft: "1vw",
                    maxHeight: "50px",
                    marginTop: "4vh",
                  }}
                  src={""}
                />
                <CardContent
                  style={{ paddingBottom: "0px", minHeight: "8vh" }}
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
                  ></Typography>
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