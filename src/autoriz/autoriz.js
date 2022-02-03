import React, { Component } from "react";
import "./autoriz.css";

export default class Autoriz extends Component {
  state = {
    loginValue: "",
    passwordValue: "",
    classError: "form-control borderRadius",
  };

  onLoginChange = (e) => {
    this.setState({
      loginValue: e.target.value,
      passwordValue: e.target.value,
    });
  };

  onPasswordChange = (e) => {
    this.setState({
      passwordValue: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.loginValue === "" ||
      null ||
      this.state.passwordValue === "" ||
      null
    ) {
      return this.setState({
        classError: "form-control borderRadius error",
      });
    } else {
      this.props.getIn(this.state.loginValue, this.state.passwordValue);
      return this.setState({
        classError: "form-control borderRadius",
      });
    }
  };

  render() {
    return (
      <div className=" main">
        <div className="content">
          <h2 className="text-center animate__animated animate__bounce">
            {" "}
            Назовите себя!{" "}
          </h2>
          <form className="form-group text-center" onSubmit={this.onSubmit}>
            <label className="col-form-label mt-4">Псевдоним </label>{" "}
            <input
              type="text"
              className={this.state.classError}
              onChange={this.onLoginChange}
              placeholder="Какой нибудь псевдоним"
              id="1"
            />
            <label className="col-form-label mt-4">Пароль </label>{" "}
            <input
              type="password"
              className={this.state.classError}
              onChange={this.onPasswordChange}
              placeholder="Пароль для авторизации"
              id="2"
            />
            <button type="submit" className="btn btn-light">
              {" "}
              Войти{" "}
            </button>{" "}
          </form>{" "}
        </div>
      </div>
    );
  }
}
