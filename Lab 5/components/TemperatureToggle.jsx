//Component to display toggle button
function TemperatureToggle({UnitState,doToggle}){
    if(UnitState==='C')
    return(
        <div>
            <button onClick={doToggle}>To Farhenheit</button>
        </div>
    );
    else if(UnitState==='F')
        return(
            <div>
                <button onClick={doToggle}>To Celsius</button>
            </div>
        );
}


export default TemperatureToggle;