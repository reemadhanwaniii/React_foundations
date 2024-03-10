import {useState} from 'react';
import  './TodoItem.css';

function handleClick(todo){
    alert(`${todo} clicked`);
}

function TodoItem(props) {
   // const [isFinished,setFinished] = useState(false);
   const [isEditing,setIsEditing] = useState(false);
   const [todoData,setTodoData] = useState(props.todo.data);
    return (
        <div>
            {/*
           <li onClick={(event)=>{
                console.log(event);
                handleClick(props.todo.data)}}>
                    <span className={(isFinished)?'todo-done':'todo-notDone'}>{props.todo.data}</span></li>
            
            <button onClick={()=>{
                setFinished(!isFinished)
                props.delete()
            }}>{(isFinished)?'Redo':'Done'}</button>
        */}

            <li>
                {
                    (isEditing)?<input type="text" value={todoData}
                                       onChange = {(event)=>setTodoData(event.target.value)}/>:<span>{todoData}</span>
                }
                
            </li>
            <button onClick={()=>{
                props.delete()
            }}>Done</button>

            <button onClick={()=>{
                setIsEditing(!isEditing);
                props.edit(todoData)
            }}>
                {(isEditing)?'Save':'Edit'}
            </button>
        </div>
    )
}

export default TodoItem;