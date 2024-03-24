import { useState } from "react";

function AddTodo({ addTodo }) {
    const [todoText,setTodoText] = useState('');
    return(
        <>
            <input 
                placeholder="add your next todo ... "
                onChange={(e)=>setTodoText(e.target.value)}
                value={todoText}/>
            <button
                onClick={()=>{
                addTodo(todoText)
                setTodoText('')}}>Submit</button>
        </>
    );
}

export default AddTodo;