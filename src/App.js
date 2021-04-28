import './App.css';
import Results from './components/results.js'
 
function App() {

  const rand = ( max, min ) => {
    return (
      Math.floor( Math.random() * (max - min) + min)
    )
  }
  console.log(rand(10, 1))

  return (
    <>
      <div className='calculator'>
        <div>
          <div className='clears'>
            <button>AC</button>
            <button>C</button>
            <button>Del</button>
            <button>(x)-1</button>
          </div>
          <div className='values'>      
            <button>1</button>      
            <button>2</button>      
            <button>3</button>      
            <button>4</button>      
            <button>5</button>      
            <button>6</button>      
            <button>7</button>      
            <button>8</button>      
            <button>9</button>      
            <button id='zero'>0</button>      
            <button>.</button>      
          </div>
          <div className='operators'>
            <button>÷</button>
            <button>x</button>
            <button>-</button>
            <button>+</button>
            </div>
        </div>
      
          <Results />
        </div>
    </>
  )
}

export default App;
