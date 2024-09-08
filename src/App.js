import React from 'react';
import './style.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
      <h2> Til you're stuck with me 24/7 ❤️❤️❤️</h2>
     <CountdownTimer
     countdownTimestampMs={1727740800000}/>
    </div>
  );
}

export default App;