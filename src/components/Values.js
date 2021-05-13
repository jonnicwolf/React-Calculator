import React from "react";
import "../styles/Values.css";

export default function Values(props) {
  const { onNumberClick } = props;
  const values = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "+", "x", "-", "÷", "%"];
  // Fun use of map here!
  const valueMap = values.map((value, i) => {
    return (
      <button
        key={i}
        onClick={() => onNumberClick(value)}
        className={"btn" + i}
      >
        {value}
      </button>
    );
  });
  return <div className="values">{valueMap}</div>;
}
