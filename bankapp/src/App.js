import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import home from './Pages/Home'
import createUser from './Pages/CreateUser';
import users from './Pages/Users';
import EditUser from './Pages/EditUser';
import TransactionsPage from "./Pages/TransactionsPage";
import AllTransactions from "./Components/AllTransactions"
import axios from "axios";


const ax = axios.create({
  baseURL:"http://localhost:8080/",
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
}

})
class App extends Component {
  // This should already be declared in your API file
  

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
           <Route exact path="/" component={home}/>
           <Route exact path="/create" component={createUser}/>
           <Route exact path="/users" component={users}/>
           <Route exact path="/edit/:handle" component={EditUser}/>
           <Route exact path="/allTransactions" component={TransactionsPage}/>

 
          </Switch>
        </Router>


      </Provider>
      // <div className="App" style={{ margin: "0 auto", width: "max-content" }}>
      //   <h1>Bank App</h1>
      // </div>
    );
  }
}

export default App;
