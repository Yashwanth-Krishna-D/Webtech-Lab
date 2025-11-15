//Component to display temperature control buttons
function TemperatureControls({onIncrease,onDecrease}){
    return(
        <div>
            <button onClick={onDecrease}>-</button>
            <span> </span>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}

export default TemperatureControls;