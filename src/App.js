import "./App.css";
import Results from "./components/Results";
import Values from "./components/Values";
import Operators from "./components/Operators";
import Clears from "./components/Clears";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: [],
    };
  }

  onNumberClick = (val) => {
    this.setState((prevState) => ({
      input: [...prevState.input, val],
    }));
  };

  rand = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  
  render() {
    console.log(this.state.input);
    const { input } = this.state;
    return (
      <div className="calculator">
        {/* create a new state val, what type it hsould be, pass it down to results. set click events to update the state */}
        <Clears />
        <Values onNumberClick={this.onNumberClick} />
        <Results input={input}/>
      </div>
    );
  }
}

export default App;
