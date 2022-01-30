import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./spiner.css";

const Spinner = () => {
  return (
    <Fragment>
      <div className="spinner">
        <div className="loadingio-spinner-radio-h15ipboow7e">
          <div className="ldio-b5q7v4xur9">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <p id="spinner" className="sp">Отправляем запрос на сервер...</p>
      </div>
   
    </Fragment>
  );
};

export default Spinner;
