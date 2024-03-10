import TodoItem from "./TodoItem";
import {useState} from "react";

function Todo(props){
  //const todoItems = props.todoList.map((todo)=><TodoItem key={todo.id} todo={todo}/>)

  function deleteTodo(id){
    //console.log(id);
    let remainingTodos = todoItem.filter((todo)=>todo.id !== id);
    updateTodo(remainingTodos);
  }

  function editTodo(todoId,todoData){
    let updateTodoItems = todoItem.map((todo)=>{
      if(todo.id == todoId) todo.data = todoData;
      return todo;
    });
    updateTodo(updateTodoItems);
  }

  const [todoItem,updateTodo] = useState([{data:"Todo2",id:736},{data:"Todo1",id:123}]);
  const [inputText,updateText] = useState("");
  return (
  <>
     <input type='text' value={inputText} onChange={(event)=>updateText(event.target.value)}></input>
     <button onClick={()=>updateTodo([...todoItem,{data:inputText,id:(new Date()).getTime()}])}>Add Todo</button>
    {/** <ul>{todoItem.map((todo) => <TodoItem todo={todo} key={todo.id}/>)}</ul> */}
    {/**
     * passing information from child to parent
     * it's bit tricky
     * we will pass a callback
     */} 
     <ul>{todoItem.map((todo) => <TodoItem 
                                    todo={todo} 
                                    key={todo.id} 
                                    delete={()=>deleteTodo(todo.id)}
                                    edit={(newTodo)=>editTodo(todo.id,newTodo)}/>)}</ul>
  </>
  );
}

export default Todo;