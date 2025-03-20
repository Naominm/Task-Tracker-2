
function TodoItem({title, description,complete,id}) {
    return ( 
        <div className="todo-item-container">
            <div className="text-container">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
            </div>
            
            <div className="todo-input-controls">
                <button>Mark as complete</button>
                <button>Delete </button>
            </div>
        </div>
     );
}

export default TodoItem;