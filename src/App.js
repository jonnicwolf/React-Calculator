import './App.css';

function App() {

  rand = (mkx, min, ) => {
    
  }
 
  return (
    <>
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
      <div>
        <button
          onClick={rand}  
        >Rand</button>
      </div>
    </>
  )
}

export default App;
