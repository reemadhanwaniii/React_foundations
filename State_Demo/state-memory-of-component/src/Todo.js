import { useState } from "react";
import TodoList from "./TodoList.js";

function Todo(){
    // let todos = [
    //     {id:1,data:"todo1"},
    //     {id:2,data:"todo2"},
    //     {id:3,data:"todo3"},
    //     {id:4,data:"todo4"}
    // ];

    const [todo,setTodo] = useState([]);
    const [newTodo,setNewTodo] = useState("");
    return (
        <div>
            <input type="text" placeholder="New todo..."
            onChange={(event)=>setNewTodo(event.target.value)}></input>
            <button onClick={()=>setTodo([...todo,newTodo])}>Add Todo</button>
            <TodoList todos={todo}/>
        </div>
    )
}

export default Todo;