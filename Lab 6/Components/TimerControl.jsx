import React from 'react';

export default function TimerControl({ isRunning, start, pause, reset }) {
  return (
    <>
      {!isRunning ? (
        <button onClick={start}>Start</button>
      ) : (
        <button onClick={pause}>Pause</button>
      )}
      <button onClick={reset}>Reset</button>
    </>
  );
}
