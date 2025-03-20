import{useState} from 'react'
import useTaskStore from "../store/tasksStore";
import "./todo.css"
function TodoInput() {
const [taskTitle,setTaskTitle] =useState("")
const [taskDescription,setTaskDescription] =useState("")

 const addNewTask=useTaskStore(function(state){
    return state.addTask
})
 function handleAddTask(e){
    e.preventDefault();
    if(!taskTitle){
        alert("please supply a task title")
        return
    }
    if(!taskDescription){
        alert("please supply a task description")
        return;
    }
    const newTask={
        id:Math.random()* 1_000_000_000,
        title:taskTitle,
        description:taskDescription,
        complete:false
    }
    addNewTask(newTask)
 }

 
    return ( 
        <form className="todo-input-form-container">
            <input
             type="text" 
             className="input-element" 
             placeholder=" Enter Your Task Title"
             value={taskTitle} 
             onChange={(e)=>setTaskTitle(e.target.value)}
             />
            <textarea 
            placeholder="Enter the  Task Description"
            value={taskDescription}
            onChange={(e)=>setTaskDescription(e.target.value)}
            ></textarea>
            <button className="submit-button" onClick={handleAddTask}> Add Todo</button>

        </form>
     );
}

export default TodoInput;