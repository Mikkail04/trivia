import React, { Component, useState } from "react";
export default ShowAnswer;

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
