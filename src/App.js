import React from 'react';
import './style.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
     <CountdownTimer
     countdownTimestampMs={1727740800000}/>
    </div>
  );
}

export default App;