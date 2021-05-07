import React from "react";
import "../styles/Results.css";



export default function results(props) {
    const { input } = props
    // this should be fine since the only inputs are numbers right?
    let output  
    if (isNaN(input[input.length - 1])) {
        output = input
    }
    else {
        output=eval(input)
    }
    console.log(input)
    
    console.log(output)
    return (
      
    <div className="results">
            <div>{input}</div>
            <div>{output}</div>
    </div>
  );
}
