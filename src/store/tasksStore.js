
import {create} from 'zustand'
import{devtools,persist}from 'zustand/middleware'

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
},
deleteTask:function(taskId){
    set(function(previousState){
      const remainingTask=  previousState.tasks.filter(function(task){
            return task.id!==taskId
        })
        return {tasks:remainingTask}
    })
}
}
}

const useTaskStore= create(devtools(persist(taskStore,{name:"Task-tracker-app"})))
export default useTaskStore;