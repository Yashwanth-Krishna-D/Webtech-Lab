import React, { useState, useEffect, useRef } from 'react';

/*
 Simple timer (Lab 6 style) using useState and useEffect.
 - start/pause/reset
 - uses interval managed by useEffect and useRef
*/
export default function Timer(){
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(()=>{
    if(running){
      intervalRef.current = setInterval(()=> {
        setSeconds(s => s + 1);
      }, 1000);
    } else if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return ()=> {
      if(intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  function reset(){ setSeconds(0); setRunning(false); }

  function format(s){
    const mm = String(Math.floor(s/60)).padStart(2,'0');
    const ss = String(s%60).padStart(2,'0');
    return `${mm}:${ss}`;
  }

  return (
    <section className="page">
      <h2>Timer</h2>
      <div style={{fontSize:48,fontWeight:700}}>{format(seconds)}</div>
      <div style={{marginTop:12}}>
        <button onClick={()=>setRunning(true)} disabled={running}>Start</button>
        <button onClick={()=>setRunning(false)} style={{marginLeft:8}} disabled={!running}>Pause</button>
        <button onClick={reset} style={{marginLeft:8}}>Reset</button>
      </div>
    </section>
  );
}
