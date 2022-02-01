import React, { useEffect, useState } from "react";
import "./main.css";
import "animate.css";
import Spinner from "../spinner/spiner";





const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [start, setStart] = useState(true);
  const [idQuestion, setIdQustion] = useState(0);


  const StartWindow = () => {
    return (
      <div className="startWindow">
        <button
          type="button"
          onClick={() => setStart(false)}
          className="btn btn-success animate__animated  animate__bounceIn"
        >
          Нажмите чтобы начать!
        </button>
      </div>
    );
  };

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
  
   
    //Вопросы генерируются здесь
  const Question = () => {


    
  
    const { category, question, correct_answer, difficulty, incorrect_answers } =
    results[idQuestion];

    let trueanswer = [true, correct_answer];
    console.log(trueanswer);
    incorrect_answers.splice((Math.random() *(3-0+1)) +0,0,trueanswer);
    console.log(incorrect_answers);

    var a = question.replace(/&quot;/g,"" );
    var questionModify = a.replace(/&#039/g,"");


    



    const generateKey = (pre) => {
      return `${ pre }_${ new Date().getTime() }`;
  }
    
   // Проверка ответа 

  const  checkAnswer = () => { 

    console.log(this.props.key);
  }



    
    const randomQuestions = incorrect_answers.map((answer) => (
      <button type="button" key={answer} onClick={() => this.checkAnswer} className="btn btn-light" >{answer}</button>
    ));

    return (
      <div className="text-center question nimate__animated  animate__bounceIn">
        <p> Категория : &nbsp;{category}</p>
        <p> Сложность:&nbsp; {difficulty}</p>
        <p>Вопрос: &nbsp;{questionModify}</p>
        <ul>{randomQuestions}</ul>
      </div>
    );
  };






  //Логика отображения
  if (error) {
    return (
      <div>
        Проблема с сервером, он перестал нам отвечать.. очень жаль..
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
    return ( 
      <div className="qiuezWindow">
        <Question />
        <p className="disclaimer text-center">Простите, но вопросы еще не локализированы, мы работаем по всему миру и работа идет полным ходом!</p>
      </div>
    );
  }
};

export default Main;
