import React, { Component, useState } from "react";
import data from "../sample_data.json";
export default NextQuestion;

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
