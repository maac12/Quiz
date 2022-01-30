import React, { useEffect, useState } from "react";
import "./main.css";
import 'animate.css';
import '../services/trivia-db'
import Spinner from "../spinner/spiner";




const Main = () => {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

   useEffect(  () => {
    async function fetchMyApi () { await fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }fetchMyApi()} , [])

const  {results} = data; 


  console.log(results);
  if (error) {
    return <div>Проблема с сервером, он перестал нам отвечать.. очень жаль.. {error.message}</div>;
  } else if (!isLoaded) {
    return <div><Spinner/></div>;
  } 
  
  else {
    return (
      <div>
     
      </div>
  
    );
  }
}


export default Main; 