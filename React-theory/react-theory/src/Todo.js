import TodoItem from "./TodoItem";
import {useState} from "react";

function Todo(props){
  //const todoItems = props.todoList.map((todo)=><TodoItem key={todo.id} todo={todo}/>)

  const [todoItem,updateTodo] = useState([{data:"Todo2",id:736},{data:"Todo1",id:123}]);
  const [inputText,updateText] = useState("");
  return (
  <>
     <input type='text' value={inputText} onChange={(event)=>updateText(event.target.value)}></input>
     <button onClick={()=>updateTodo([...todoItem,{data:inputText,id:(new Date()).getTime()}])}>Add Todo</button>
     <ul>{todoItem.map((todo) => <TodoItem todo={todo} key={todo.id}/>)}</ul>
  </>
  );
}

export default Todo;