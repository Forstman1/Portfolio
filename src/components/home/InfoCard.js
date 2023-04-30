import classes from "./InfoCard.module.css"
import React from "react"
import Typed from 'react-typed';




export default function InfoCard () {
    return (
        <div>
            <div className={classes.biggerContainer}>
                <div className={classes.container}>
                    <h2  style={{color: "#6E07F3"}}> Software Engineer</h2>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <p style={{color: "#6E07F3"}}>Languages | speak:</p>
                    <p><Typed strings={["HTML, CSS, C, C++, Javascript, Typescript"]}  typeSpeed={70}/></p>
                    <p></p>
                    <p style={{color: "#6E07F3"}}>Dev Tools:</p>
                    <div><Typed strings={["Vs Code"]}  typeSpeed={70}/></div>
                    <div> <Typed strings={["Github"]}  typeSpeed={70}/> </div>
                    <div> <Typed strings={["Git"]}  typeSpeed={70}/> </div>
                    <div> <Typed strings={["Terminal"]}  typeSpeed={70}/> </div>
                    <div> <Typed strings={["Docker"]}  typeSpeed={70}/> </div>
                    <p></p>

    
                </div> 
            </div>
            <div className={classes.separator1}></div>
            <div className={classes.separator2}></div>

    </div>);
} 