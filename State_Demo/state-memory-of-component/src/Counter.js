function Counter(){
    let x = 10;
    return(
        <div className = "counter">
            <span id="counterValue">{x}</span>
            <br/><br/>
            <button id="click">Click</button>
        </div>
    )
}

export default Counter;