import React from "react";
import "../styles/Results.css";



export default function results(props) {
    const { input } = props
    // i'm only gonna use this once I swear ='(
    const format = eval(input)
    const output = new Intl.NumberFormat().format(format)
    console.log(input)
    console.log(format)
    console.log(output)
    
    return (
      
    <div className="results">
            <div>{input}</div>
            <div>{}</div>
    </div>
  );
}
