import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  console.log(data[0].question.text);
  let questionNum = 0;
  return (
    <div className="app">
      Trivia!
      <Question
        question={data[questionNum].question.text}
        answers={data[questionNum].question.choices}
      />
      <NextQuestion />
    </div>
  );
}
function Question(props) {
  return (
    <div>
      <p className="question">{props.question}</p>
      {props.answers.map((answer) => (
        <Answer answer={answer} />
      ))}
    </div>
  );
}

function NextQuestion(props) {
  return <button>Next Question</button>;
}

function Answer(props) {
  return <div> {props.answer} </div>;
}

export default App;
