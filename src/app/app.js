import React, { Component } from "react";
import Header from "../header/header";
import Autoriz from "../autoriz/autoriz";
import Spinner from "../spinner/spiner";
import Main from "../main/main";

export default class App extends Component {
  state = {
    nameUser: "",
    loginUser: "",
    login: false,
    trueAnswer: 0,
    falseAnswer: 0,
  };

  _startLoading = (timeout) => {
    this.start = setTimeout(() => {
      this.setState({ loading: false });
    }, timeout);
  };

  getIn = (loginValue, passwordValue) => {
    this.setState({
      nameUser: loginValue,
      loginUser: passwordValue,
      login: true,
    });
  };

  countTrue = () => {
    this.setState({ trueAnswer: this.state.trueAnswer + 1 });
    console.log(this.state);
  };

  countFalse = () => {
    this.setState({ falseAnswer: this.state.falseAnswer + 1 });
  };

  render() {
    const { login } = this.state;

    if (login === true) {
      return (
        <div>
          <Header login={this.state.nameUser} />
          <Main
            label="123"
            countTrue={this.countTrue}
            countFalse={this.countFalse}
            trueAnswer = {this.state.trueAnswer}
            falseAnswer = {this.state.falseAnswer}
          />
        </div>
      );
    }
    if (login === false) {
      return <Autoriz getIn={this.getIn} doing={this.doing} />;
    }
  }
}
