import Todo from "../Todo/Todo";

function TodoList({ todos }) {
    return (
        <>
            { todos && todos.map((todo) => <Todo key={todo.id} text={todo.text} id = {todo.id} isFinished={todo.isFinished}/>)}
        </>
    );
}

export default TodoList;