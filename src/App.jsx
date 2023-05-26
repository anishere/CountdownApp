import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if(isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    }
    
    return () => clearInterval(intervalId)
  }, [isRunning])

  const startTimer = () => {
    setIsRunning(true)
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setTime(0)
    setIsRunning(false)
  }

  return (
    <div className="App">
      <h1>CountDown Timer</h1>
      <p className='timer'>{time}</p>
      <div className='buttons'>
        {
          isRunning ? 
          (<button onClick={pauseTimer}>Pause</button>)
          :
          (<button onClick={startTimer}>Start</button>)
        }
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
