import React from 'react';

export default function TimerSet({ minutes, seconds, setMinutes, setSeconds }) {
  return (
    <div className="timer-inputs">
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
        placeholder="MM"
        min="0"
      />
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value))}
        placeholder="SS"
        min="0"
        max="59"
      />
    </div>
  );
}
