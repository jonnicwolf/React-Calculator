import React from "react";
import "../styles/Operators.css";

const Operators = () => {
//   const isOperator = (val) => {
//     return isNaN(val) || val === "." || val === "="
//   };
//     if (isOperator) {
      
//   }

    const operators = ['÷', 'x', '-', '+']
    const operatorFactory = operators.map((operand, i) => {
        return (
            <button
                key={i}
                // onClick={() => onOperatorClick(operand)}
            >{operand}</button>
        )
        
    })
  return (
    <div className="operators">
      {operatorFactory}
    </div>
  );
};

export default Operators;
