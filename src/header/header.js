import React, { Component } from "react";
import "./header.css";






export default class Header extends Component {

 
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
      
            <a className="navbar-brand" href="#">
              Quiez by Rustem
            </a>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <a className="nav-link">
                 Добро пожаловать {this.props.login}!
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">
                  Домашняя страница
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Пожертовать денег
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Поблагодарить отправив голые фотки
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  О проекте
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
