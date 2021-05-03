// import "./App.css";
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

  // addInput = (value) => {
  //   this.setState({ input: this.state.input + value})

  // }
  addInput = (e) => {
    this.setState({ input: this.state.input + e.target.value })
    console.log(this.state.input)
  }

  displayStuff = ()=> {

  }

  rand = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  render() {
    return (
      <div className="calculator">
        
        {/* create a new state val, what type it hsould be, pass it down to results. set click events to update the state */}
        <Clears />
        <Values />
        <Operators />
        <Results input={this.addInput}/>
      </div>
    );
  }
}

export default App;
