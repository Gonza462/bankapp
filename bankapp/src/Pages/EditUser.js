import React, { Component } from 'react'
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EditAccount from '../Components/EditAccount'
 class EditUser extends Component {
    
    state ={
        handle:null
    }

    componentDidMount() {
        const handle = this.props.match.params.handle;
        this.setState({
            handle:handle
        })

    }
    render() {
        return (
            <div style={{ margin: "0 auto", maxWidth: "1000px",height:'100vh',background:"#edf6f9" }}>
        <h1 style={{ textAlign: "center" }}>Account Summary</h1>
        <Divider />
        <EditAccount handle={this.state.handle}/>
     
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