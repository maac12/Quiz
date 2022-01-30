import React, { Component } from "react";
import Header from "../header/header";
import Autoriz from "../autoriz/autoriz";
import Spinner from "../spinner/spiner";
import Main from "../main/main"


export default class App extends Component {


  state = {
    nameUser: "",
    loginUser: "",
    login: false,
  };
 
_startLoading = timeout => {
  this.start = setTimeout(() => {
    this.setState( {loading : false})
  }, timeout);
}


getIn = (loginValue,passwordValue) => {
  this.setState({
    nameUser : loginValue,
    loginUser : passwordValue,
    login : true,
  })
}






  render() {
    const { login } = this.state;

    if (login === true) {
      return (<div><Header login = {this.state.nameUser} /><Main/></div>);
    }
    if (login === false) {
      return <Autoriz getIn={this.getIn} doing={this.doing} />;
    }
  }
}
