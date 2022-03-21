import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

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
      {/* <button onClick={() => setDisplay(true)}>
        Click for the correct answer
      </button> */}
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
function Question(props) {
  return (
    <div>
      <p className="question">{props.question}</p>
      {props.answers.choices.map((answer) => (
        <Answers
          check={props.select()}
          clicked={answer}
          display={props.display}
          answers={answer}
        />
      ))}
    </div>
  );
}

function NextQuestion(props) {
  if (props.num < data.length - 1) {
    return (
      <button
        onClick={() => {
          props.next();
          props.hide();
        }}
      >
        Next Question
      </button>
    );
  } else {
    return null;
  }
}

function Answers(props) {
  return (
    <div
      onClick={() => {
        props.check(props.clicked);
        props.display();
      }}
    >
      {" "}
      {props.answers}{" "}
    </div>
  );
}

function ShowAnswer(props) {
  if (props.display) {
    if (props.select === props.correct) {
      return (
        <p>
          {" "}
          Correct! You clicked {props.select}, which is the correct answer!{" "}
        </p>
      );
    } else {
      return (
        <p>
          {" "}
          Wrong! You clicked {props.select}. The correct answer is{" "}
          {props.correct}!{" "}
        </p>
      );
    }
  } else {
    return null;
  }
}
export default App;
