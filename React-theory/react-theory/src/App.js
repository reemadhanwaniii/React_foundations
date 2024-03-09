import Todo from './Todo.js';
import Component1 from './Component1.js';

function App() {
  const todo = [
     {data:'todo 1',id:201},
     {data:'todo 2',id:277},
     {data:'todo 3',id:626}
  ]
  return (
    <div className="App">
      {/* <Component1 /> */}
      <Todo todoList={todo}/>
    </div>
  );
}

export default App;
