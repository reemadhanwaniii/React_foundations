import {useState} from 'react';


let y = 90;
function Counter_state(){
    const [x,updateX] = useState(19);

    // function updateX(){
    //     console.log("updating x");
    //     x+=1;
    // }

    function updateY(){
        console.log("updating y");
        y+=1;
    }

    const [count,setCount] = useState(10);
    const [text,setText] = useState("");
   return(
   <div id="counter">
        <span id="x_value">X: {x}</span>
        <br/>
        <br/>
        <span id="y_value">Y: {y}</span>
        <br/>
        <br/>
        <span id="count_value">Count: {count}</span>
        <br/>
        <br/>
        <button id="update x" onClick={()=>updateX(x+1)}>Click to update X</button>
        <br/><br/>
        <button id="update y" onClick={(updateY)}>Click to update Y</button>
        <br/><br/>
        <button id="update count" onClick={()=>setCount(count+1)}>Click to update count</button>
        <br/><br/>
        
        <input type="text" onChange={(event)=>setText(event.target.value)}/>
    </div>
   );
}

export default Counter_state;