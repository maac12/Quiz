import React from "react";
import "./header.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import "animate.css";

const Header = ({ falseAnswer, nameUser, trueAnswer, trying }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark animate__animated animate__bounceInDown">
      <div className="container-fluid">
        <Tooltip title="Сам, обнови, ало" position="bottom" trigger="click">
          <a className="navbar-brand headLogo" href="#" id="myButton">
            Quiez by Rustem
          </a>
        </Tooltip>

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
              <Tooltip
                size="big"
                trigger="click"
                interactive
                html={
                  <div className="profile">
                    <p>{nameUser}</p>
                    <p>{"Правильных ответов: " + trueAnswer}</p>
                    <p>{"Неправильных ответов: " + falseAnswer}</p>
                    <p>{"Попытка : " + trying}</p>
                  </div>
                }
              >
                <a className="nav-link" href="#">
                  {"Добро пожаловать, " + nameUser + "!"}
                </a>
              </Tooltip>
            </li>
            <li className="nav-item">
              <Tooltip
                title="Просто отправь мне на карту"
                position="bottom"
                trigger="click"
              >
                <a className="nav-link" href="#">
                  Пожертовать денег
                </a>
              </Tooltip>
            </li>
            <li className="nav-item">
              <Tooltip
                title="Проект начать в феврале 2022 года"
                position="bottom"
                trigger="click"
              >
                <a className="nav-link" href="#">
                  О проекте
                </a>
              </Tooltip>
            </li>
            <li className="nav-item">
              <h4 className="nav-link counter">
                <span className="trueCount"> {trueAnswer} </span>
                <span className="falseCount ">{falseAnswer}</span>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
