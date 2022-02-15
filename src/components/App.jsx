import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  console.log(data[0].question.text);
  let questionNum = 0;
  return (
    <div className="app">
      Trivia!
      <Question question="question" />
    </div>
  );
}
function Question(props) {
  return <p className="question"> {props.question}</p>;
}

export default App;
