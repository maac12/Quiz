import React, { useEffect, useState } from "react";
import "./main.css";
import "animate.css";
import Spinner from "../spinner/spiner";


const StartWindow = () => {
  return (
    <div className="startWindow">
      <button type="button" class="btn btn-success animate__animated  animate__bounceIn">Нажмите чтобы начать!</button>
    </div>
  );
};

const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]); 
  const [start, setStart] = useState(true);

  useEffect(() => {
    async function fetchMyApi() {
      await fetch(
        "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setData(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    fetchMyApi();
  }, []);

  const { results } = data;

  console.log(results);

  if (error) {
    return (
      <div>
        Проблема с сервером, он перестал нам отвечать.. очень жаль..{" "}
        {error.message}
      </div>
    );
  } else if (!isLoaded || results === undefined) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else if (start) {
    return <StartWindow />;
  } else {
    return <div>{results[0].type}</div>;
  }
};

export default Main;
