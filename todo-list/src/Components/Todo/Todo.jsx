function Todo({ text,isFinished,id }) {
    return(
        <div>
            <input type="checkbox" checked = {isFinished}/>
            <span>{text}</span>
            <button>Edit</button>
            <button>Delete</button>
            <br/>
            <br/>
        </div>
    );
}

export default Todo;