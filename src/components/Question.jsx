import React, { useState } from "react";
export default Question;

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
