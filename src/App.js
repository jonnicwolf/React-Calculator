import "./App.css";
import { Component } from "react";
import Values from "./components/Values";
import Results from "./components/Results";
import Clears from "./components/Clears";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      output: "",
    };
  }

  onNumberClick = (val) => {
    if (val === 'x') {
      val = "*"
    }
    this.setState(() => ({
      input: this.state.input + val,
    }));
  };

  rand = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  render() {
    const { input, output } = this.state;

    return (
      <div className="calculator">
        {/* create a new state val, what type it hsould be, pass it down to results. set click events to update the state */}
        <Clears />
        <Values onNumberClick={this.onNumberClick} />
        <Results
          input={input}
          atTimesSumDifferencesDoDivideUs={output} />
        
      </div>
    );
  }
}

export default App;
