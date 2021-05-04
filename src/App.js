import "./App.css";
import Results from "./components/Results";
import Values from "./components/Values";
import Operators from "./components/Operators";
import Clears from './components/Clears'
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  rand = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  numClick = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }
  render() {
    const {numClick} = this.state
    return (
      <div className="calculator">
        
        {/* create a new state val, what type it hsould be, pass it down to results. set click events to update the state */}
        <Clears />
        <Values />
        <Operators onClick={numClick}/>
        <Results />
      </div>
    );
  }
}

export default App;
