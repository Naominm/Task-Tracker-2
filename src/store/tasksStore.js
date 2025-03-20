
import {create} from 'zustand'

function taskStore(set){
return{
    tasks:[],
addTask:function(newTask){
set(function(previousState){
    return{tasks:[newTask,...previousState.tasks]}
})
}
}
}

const useTaskStore= create(taskStore)
export default useTaskStore;