import now from "../utils/now";
import TodoInput from "./TodoInput";
import "./Hero.css";
function Hero() {
    return ( 
    <section className="hero-section-container">
 <h1> Good {now()} Sunshine</h1>
 <h3>You have 5 tasks left</h3>
 <TodoInput/>
    </section> );
}

export default Hero;