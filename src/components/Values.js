import React from "react";
import "../styles/Values.css";

export default function Values(props) {
  const { onNumberClick } = props;
  const values = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    ".",
    "÷",
    "x",
    "-",
    "+",
  ];
  const valueMap = values.map((value, i) => {
    return (
      <button key={i} onClick={() => onNumberClick(value)}>
        {value}
      </button>
    );
  });
  return <div className="values">{valueMap}</div>;
}
