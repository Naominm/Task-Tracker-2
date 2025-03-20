
import {create} from 'zustand'

function taskStore(set){
return{
    tasks:[],
addTask:function(newTask){
set(function(previousState){
    return{tasks:[newTask,...previousState.tasks]}
})
},
markComplete:function(taskId){
    set(function(previousState){
const updatedTask=previousState.tasks.map(function(task){
    if(task.id===taskId){
        task.complete=true
    }
    return task;
})
return{tasks:updatedTask}
    })
},
markIncomplete:function(taskId){
set(function(previousState){
   const updatedTask= previousState.tasks.map(function(task){
        if(task.id===taskId){
            task.complete=false
        }
        return task
    })
    return{tasks:updatedTask}
})
}
}
}

const useTaskStore= create(taskStore)
export default useTaskStore;