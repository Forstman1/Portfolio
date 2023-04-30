import React from "react";
import NavBar from "../ux/navbvar";
import Card from "../ux/card";
import classes from "./projects.module.css"

export default function Projects (props) {
    return (<div>
        <NavBar />
        <h1 className={classes.title}  style={{color: "#6E07F3"}}>All Projects</h1>
        <div className={classes.container}>
            {props.data.map(Data => {
                return (<Card data={Data}/>)
            })}
        </div>
    </div>)
}