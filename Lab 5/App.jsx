import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TemperatureDisplay from './components/TemperatureDisplay.jsx'
import TemperatureControls from './components/TemperatureControls.jsx'
import TemperatureToggle from './components/TemperatureToggle.jsx'

function App() {
  const [Temp, setTemp] = useState(0)
  const [UnitState, setUnitState] = useState('C')

  //Function to increase the temperature by one
  const increaseTemp = () => setTemp(Temp+1);

  //Function to decrease the temperature by one
  const decreaseTemp = () => setTemp(Temp-1);

  //Function to toggle between celsius and farhenheit
  const Toggle = () => {
    if(UnitState === 'C') {setUnitState('F');
      setTemp((Temp*9/5)+32)}
    else if(UnitState === 'F') {setUnitState('C');
      setTemp((Temp-32)*5/9)
    }
  }
  
  //if use state is in celsius return the following
  if(UnitState === 'C'){
    return (
      <>
        <div>
            <h1>TEMPERATURE CONVERTER</h1>
            <TemperatureDisplay Temp={Temp} UnitState={UnitState}></TemperatureDisplay>
            <TemperatureControls onIncrease={increaseTemp} onDecrease={decreaseTemp}></TemperatureControls>
            <br></br>
            <TemperatureToggle doToggle={Toggle} UnitState={UnitState}></TemperatureToggle>
        </div>
          
      </>
    );
  }
  //if use state is in farhenheit return the following
  else if(UnitState === 'F'){
    return (
      <>
        <div>
            <h1>TEMPERATURE CONVERTER</h1>
            <TemperatureDisplay Temp={Temp} UnitState={UnitState}></TemperatureDisplay>
            <TemperatureControls onIncrease={increaseTemp} onDecrease={decreaseTemp}></TemperatureControls>
            <br></br>
            <TemperatureToggle doToggle={Toggle} UnitState={UnitState}></TemperatureToggle>
        </div>
          
      </>
    );
  }

}

export default App
