import React, { useState, useEffect } from 'react';
import TimerSet from './Components/TimerSet';
import TimerControl from './Components/TimerControl';
import TimerDisplay from './Components/TimeDisplay';
import Header from './Components/Header';
import './App.css';

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const initialiser = () => {
    setTimeLeft(Number(minutes) * 60 + Number(seconds));
  };

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (minutes === 0 && seconds === 0) return;
    if (timeLeft === 0) initialiser();
    setIsRunning(true);
  };

  const handlePause = () => setIsRunning(false);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <>
    <Header />
    <div className="timer-container stopwatch">
      <TimerDisplay timeLeft={timeLeft} />
      <div className="controls">
        <TimerControl 
          isRunning={isRunning} 
          start={handleStart} 
          pause={handlePause} 
          reset={handleReset} 
        />
      </div>
      <TimerSet 
        minutes={minutes} 
        seconds={seconds} 
        setMinutes={setMinutes} 
        setSeconds={setSeconds} 
      />
    </div>
    </>
  );
}


export default App;