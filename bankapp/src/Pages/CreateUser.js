import React, { Component } from 'react'
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";
import { TheatersRounded } from '@material-ui/icons';
import Axios from 'axios';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const cors = require("cors");
//app.use(cors());


export default class CreateUser extends Component {
    constructor() {
        super();
        this.state = {
          email: '',
          phone:'',
        
          firstName: " ",
          lastName: " ",

          formErrors: {
              firstName:"",
              lastName:"",
              email:"",
              phone:"",
              
          },
    
        };
      }

      handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state)
        const postUser = {
          firstName:this.state.firstName,
          lastName: this.state.lastName,
          phone:this.state.phone,
          email:this.state.email,
          
        }
        console.log(postUser)
        
     
        axios
        .post("http://localhost:8080/user", postUser)
        .then((res) => {
          //console.log(res);
          

       
        })
        .catch((err) => {
         
          console.log(err)
        });
        e.target.reset();
     

        // if (formValid(this.state)) {
        //   console.log(`
        //     --SUBMITTING--
        //     First Name: ${this.state.firstName}
        //     Last Name: ${this.state.lastName}
        //     Email: ${this.state.email}
        //     Password: ${this.state.password}
        //   `);
        // } else {
        //   console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        // }
      }
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(e.target)
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "firstName":
            formErrors.firstName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "lastName":
            formErrors.lastName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "phone":
            formErrors.phone =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    

    render() {
        const {formErrors} = this.state;
        return (
            <div style={{ margin: "0 auto", maxWidth: "1000px", background:"#edf6f9"}}>
        <h1 style={{ textAlign: "center"}}>Create User</h1>
        <Divider />
        <div className = "wrapper">
            <div className="form-wrapper" style={{marginTop:'-45vh'}}>
            <h1>User Details</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
          
            <div className="email">
              <label htmlFor="address">Phone</label>
              <input
                className={formErrors.phone.length > 0 ? "error" : null}
                placeholder="Phone"
                type="text"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
         
            </div>

                </form>
            </div>
        </div>
       
        </div>
        )
    }
}
