import classes from "./InfoCard.module.css"
import React from "react"




export default function InfoCard () {
    return (
        <div>
            <div className={classes.biggerContainer}>
                <div className={classes.container}>
                    <h2  style={{color: "#6E07F3"}}> Software Engineer</h2>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <p style={{color: "#6E07F3"}}>Languages | speak:</p>
                    <p>HTML, CSS, C, C++, Javascript, Typescript</p>
                    <p></p>
                    <p style={{color: "#6E07F3"}}>Dev Tools:</p>
                    <div>Vs Code</div>
                    <div>Github</div>
                    <div>Git</div>
                    <div>Terminal</div>
                    <div>Docker</div>
                    <p></p>

                </div> 
            </div>
            <div className={classes.separator1}></div>
            <div className={classes.separator2}></div>

    </div>);
} 