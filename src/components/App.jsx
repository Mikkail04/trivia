import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Question from "./Question.jsx";
import NextQuestion from "./NextQuestion.jsx";
import ShowAnswer from "./ShowAnswer.jsx";

function App() {
  console.log(data[0].question.text);
  const [questionNum, setQuestNum] = useState(0);
  const [answerDisplayed, setDisplay] = useState(false);
  const [select, setSelect] = useState(null);

  return (
    <div className="app">
      Trivia!
      <Question
        question={data[questionNum].question.text}
        answers={data[questionNum].question}
        select={() => setSelect}
        display={() => setDisplay(true)}
      />
      <ShowAnswer
        display={answerDisplayed}
        select={select}
        correct={
          data[questionNum].question.choices[
            data[questionNum].question.correct_choice_index
          ]
        }
      />
      <NextQuestion
        next={() => setQuestNum(questionNum + 1)}
        hide={() => setDisplay(false)}
        num={questionNum}
      />
    </div>
  );
}

export default App;
