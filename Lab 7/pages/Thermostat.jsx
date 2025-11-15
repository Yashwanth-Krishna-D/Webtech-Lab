import React, { useState } from 'react';

/*
 Simple thermostat demo (from Lab 5 reference).
 - uses useState only.
 - allows increasing/decreasing temperature and toggling mode.
*/
export default function Thermostat(){
  const [temp, setTemp] = useState(22);
  const [mode, setMode] = useState('off'); // off, heat, cool

  return (
    <section className="page">
      <h2>Thermostat</h2>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{fontSize:56,fontWeight:700}}>{temp}°C</div>
        <div>
          <button onClick={()=>setTemp(t=>t+1)}>+</button>
          <button onClick={()=>setTemp(t=>t-1)} style={{marginLeft:8}}>-</button>
          <div style={{marginTop:12}}>
            <button onClick={()=>setMode('heat')} aria-pressed={mode==='heat'}>Heat</button>
            <button onClick={()=>setMode('cool')} aria-pressed={mode==='cool'} style={{marginLeft:8}}>Cool</button>
            <button onClick={()=>setMode('off')} aria-pressed={mode==='off'} style={{marginLeft:8}}>Off</button>
          </div>
        </div>
      </div>
      <p style={{marginTop:12}}>Mode: <strong>{mode}</strong></p>
    </section>
  );
}
