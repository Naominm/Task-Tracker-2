import useTaskStore from "../store/tasksStore";
import now from "../utils/now";
import TodoInput from "./TodoInput";
import "./Hero.css";
function Hero() {
    const tasks=useTaskStore(state=>state.tasks)
    let numberOfInCompleteTasks=0;
    tasks.forEach(task => {
        if(task.complete==false)numberOfInCompleteTasks++
    });
    return ( 
    <section className="hero-section-container">
 <h1> Good {now()} Naomi</h1>
 <h3>You have {numberOfInCompleteTasks} tasks left</h3>
 <TodoInput/>
    </section> );
}

export default Hero;