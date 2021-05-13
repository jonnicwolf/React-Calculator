import React from "react";
import "../styles/Results.css";

export default function results(props) {
  const { input } = props;
  // this should be fine since the only inputs are numbers right?
  let output;
  // A nested if/else statement can be challenging to follow.
  // I'd recommend separate if statements.
  // Or, even better, a helper function that returns a value.
  if (isNaN(input[input.length - 1])) {
    output = input;
    console.log('first if ran')
    if (input[input.length - 1] === "%") {
      console.log(`% seen`);
      const percentage = prompt('Enter a percentage',)
      output = eval(String(percentage * (`${input} / 100`)))
      console.log(output)
    }
  } else {
    console.log('else ran')
    output = eval(input);
  }

  // The extra space after a curly brace (and before a return) are good ideas.
  // They make your code much more readable!
  return (
    <div className="results">
      <div id="input">{input}</div>
      <div id="output"> ={output} </div>
    </div>
  );
}
