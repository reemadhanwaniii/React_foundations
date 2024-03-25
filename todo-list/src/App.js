import { useReducer, useState } from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import TodoReducer from "./reducers/TodoReducer";

function App() {

  //const [todos,setTodos] = useState([]);
  const [todos,dispatch] = useReducer(TodoReducer,[]);

  // function addTodo(todoText) {
  //   let nextId = todos.length+1;
  //   setTodos([...todos,{id:nextId,text:todoText,isFinished:false}]);
  // }

  return (
    <div className="App">
      <TodoContext.Provider value={{todos,dispatch}}>
        <AddTodo/>
        <TodoList/>
      </TodoContext.Provider>
      
    </div>
  );
}

export default App;
