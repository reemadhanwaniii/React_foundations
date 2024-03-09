import {useState} from 'react';
import  './TodoItem.css';

function handleClick(todo){
    alert(`${todo} clicked`);
}

function TodoItem(props) {
    const [isFinished,setFinished] = useState(false);
    return (
        <div>
            <li onClick={(event)=>{
                console.log(event);
                handleClick(props.todo.data)}}>
                    <span class={(isFinished)?'todo-done':'todo-notDone'}>{props.todo.data}</span></li>
            <button onClick={()=>setFinished(!isFinished)}>{(isFinished)?'Redo':'Done'}</button>
        </div>
    )
}

export default TodoItem;