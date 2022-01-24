import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

let questNum = 0;

function App() {
  return (
    <div className="app">
      <Question question={data[questNum].question} />
      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return <div>{props.question.text}</div>;
}

function NextQuestion() {
  return <button>Next Question</button>;
}

export default App;
