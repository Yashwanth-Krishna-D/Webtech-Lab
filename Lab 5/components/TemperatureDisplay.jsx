//Component to display temperatures
function TemperatureDisplay({Temp,UnitState}){
    if(UnitState === 'C')
        return(
            <div>
                <h1>{Temp} °C</h1>
            </div>
        );
    if(UnitState === 'F')
        return <div>
            <h1>{Temp} °F</h1>
        </div>
}

export default TemperatureDisplay;