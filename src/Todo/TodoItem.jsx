import useTaskStore from "../store/tasksStore";
function TodoItem({title, description,complete,id}) {
  const markAsCompleted=  useTaskStore(function(state){
        return state.markComplete
    })
   const markAsIncomplete= useTaskStore(function(state){
        return state.markIncomplete
    })
    function handleMarkIncomplete(){
        markAsIncomplete(id)
    }
    function handleMarkComplete(){
        markAsCompleted(id)
    }
    return ( 
        <div className="todo-item-container">
            <div className="text-container">
            <h1 className={complete? `task-title complete`:`task-title`}>{title}</h1>
            <p className={complete? `complete`:``}>{description}</p>
            </div>
            
            <div className="todo-input-controls">
                <button  onClick={complete? handleMarkIncomplete:handleMarkComplete}>{complete? "Mark as incomplete":"Mark as complete"} </button>
                <button>Delete </button>
            </div>
        </div>
     );
}

export default TodoItem;