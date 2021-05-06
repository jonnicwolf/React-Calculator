import React from "react";
import "../styles/Results.css";

export default function results(props) {
    const {input} = props
  return (
    <div className="results">
      <div>{input}</div>
    </div>
  );
}
