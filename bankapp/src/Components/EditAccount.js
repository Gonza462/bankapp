import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import Profile from "../Components/Profile"
export default class EditAccount extends Component {
    state ={
        UserHandle:null
    }
 
    componentWillReceiveProps (props){
        this.setState({
            UserHandle:props.handle
        })
      
    }
    render() {
        return (
            <div style={{ margin: "0 auto"}}>
                {/* <Typography variant="h4" style={{textAlign:"center"}}>{this.state.UserHandle}</Typography> */}
                <Profile handle={this.state.UserHandle}/>
            </div>
        )
    }
}
