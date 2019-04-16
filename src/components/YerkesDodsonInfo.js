import React from "react"
import "../stylesheets/YerkesDodsonInfo.styles.css"
function YerkesDodsonInfo() {
    return(
        <div className="ydi">
            <h1>The Yerkes-Dodson Law</h1>
            <img src={'http://integrativecancer.org/wp-content/uploads/Yerkes-Dodson-curve-1024x600.png'}/>
            <p>
                "The Yerkes–Dodson law is an empirical relationship between arousal and performance, originally developed by psychologists Robert M. Yerkes and John Dillingham Dodson in 1908.
                The law dictates that performance increases with physiological or mental arousal, but only up to a point. When levels of arousal become too high, performance decreases. 
                The process is often illustrated graphically as a bell-shaped curve which increases and then decreases with higher levels of arousal."
            </p>
        </div>
    );
}

export default YerkesDodsonInfo