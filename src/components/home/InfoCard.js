import classes from "./InfoCard.module.css"
import React from "react"
import Typed from 'react-typed';




export default function InfoCard () {
    return (
        <div className={classes.biggercontainer}>
                <div className={classes.container}>
                    <h1  className={classes.aboutme} > ABOUT ME</h1>
                    <p className={classes.text}>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <p className={classes.text}>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>

                    <h1 style={{color: "#facf0f"}}>Languages | speak:</h1>
                    <p><Typed strings={["HTML, CSS, C, C++, Javascript, Typescript, SQL Basics, Reactjs, React Native"]}  typeSpeed={70}/></p>
                    <p></p>
                    <h1 style={{color: "#facf0f"}}>Dev Tools:</h1>
                    <div className={classes.skills}><Typed strings={["Vs Code"]}  typeSpeed={70}/></div>
                    <div className={classes.skills}> <Typed strings={["Github"]}  typeSpeed={70}/> </div>
                    <div className={classes.skills}> <Typed strings={["Git"]}  typeSpeed={70}/> </div>
                    <div className={classes.skills}> <Typed strings={["Terminal"]}  typeSpeed={70}/> </div>
                    <div className={classes.skills}> <Typed strings={["Docker"]}  typeSpeed={70}/> </div>
                    <p></p>

    
                </div> 

    </div>);
} 