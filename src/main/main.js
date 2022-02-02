import React, { useEffect, useState } from "react";
import "./main.css";
import "animate.css";
import Spinner from "../spinner/spiner";

const Main = ({ countTrue, countFalse, falseAnswer,trueAnswer }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [start, setStart] = useState(true);
  const [idQuestion, setIdQuestion] = useState(0);
  const [endQuest, setEndQuest] = useState(false);

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
  console.log(countTrue);

  //Проверка ответа
  function checkAnswer(answer) {
    if (answer.id === 10) {
      setIdQuestion(idQuestion + 1);
      countTrue();
    }

    if (idQuestion === 8) {
      setEndQuest(true);
    } 

    else {
      setIdQuestion(idQuestion + 1);
      countFalse();
    }
  }

  //Вопросы генерируются здесь
  const Question = () => {
    const {
      category,
      question,
      correct_answer,
      difficulty,
      incorrect_answers,
    } = results[idQuestion];

    var xid = 0;

    let trueanswer = { Answer: correct_answer, id: 10 };
    let arrayQuestions = incorrect_answers.map((x) => {
      xid++;
      return { Answer: x, id: xid };
    });

    arrayQuestions.splice(Math.random() * (3 - 0 + 1) + 0, 0, trueanswer);

    var questionModify = question.replace(/&quot;/g, "").replace(/&#039/g, "");

    const randomQuestions = arrayQuestions.map((answer) => {
      return (
        <button
          type="button"
          key={answer.id}
          onClick={() => checkAnswer(answer)}
          className="btn btn-light"
        >
          {answer.Answer}
        </button>
      );
    });

    return (
      <div className="text-center question animate__animated  animate__fadeIn">
        <p> {"Категория : " + category}</p>
        <p> {"Сложность : " + difficulty}</p>
        <p> {"Вопрос: " + questionModify}</p>
        <ul>{randomQuestions}</ul>
      </div>
    );
  };

  console.log(falseAnswer);
  console.log(trueAnswer);
//Конечное окно
  const EndWindow = ({falseAnswer,trueAnswer}) => {

    const {
      category,
      difficulty,
    } = results[idQuestion];

    return <div className="qiuezWindow  endWindow text-center animate__animated animate__fadeIn"><h3>Поздравляю вы завершили Викторину!</h3>
            <p> {"Категория : " + category}</p>
            <p> {"Сложность : " + difficulty}</p>
            <p>Правильные ответы </p><p className="totalTrue"> {trueAnswer} </p>
            <p>Неправильные ответы </p><p className="totalFalse"> {falseAnswer} </p>

    </div>;
  };

  //Логика отображения
  if (error) {
    return (
      <div>
        Проблема с сервером, он перестал нам отвечать.. очень жаль..
        {error.message}
      </div>
    );
  }
  if (!isLoaded || results === undefined) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  if (start) {
    return <StartWindow />;
  }
  if (endQuest === true) {
    return <EndWindow falseAnswer={falseAnswer} trueAnswer={trueAnswer} />;
  } else {
    return (
      <div className="qiuezWindow">
        <Question />
        <p className="disclaimer text-center">
          Простите, но вопросы еще не локализированы, мы работаем по всему миру
          и работа идет полным ходом!
        </p>
      </div>
    );
  }
};

export default Main;
