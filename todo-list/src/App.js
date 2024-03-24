import { useState } from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";

function App() {

  const [todos,setTodos] = useState([
    {id : 1,text : "todo1", isFinished: true},
    {id : 2,text : "todo2", isFinished: false},
    {id : 3,text : "todo3", isFinished: true}
  ]);


  function addTodo(todoText) {
    let nextId = todos.length+1;
    setTodos([...todos,{id:nextId,text:todoText,isFinished:false}]);
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
