import classes from "./firstframe.module.css";
import avatar from "../../images/avatar.svg";
import desktop from "../../images/desktop.svg";

function FirstFrame (){
    return (<div className={classes.container}>
        <h1>HELLO I AM SAMI. SOFTWARE ENGINEER</h1>
        <h3>I code beautifully simple things, and I love what I do.</h3>
        <img className={classes.avatar} src={avatar} alt="avatar" />
        <div ><img className={classes.desktop} src={desktop} alt="desktop" /></div>
        <div className={classes.separator}></div>
    </div>);    
}

export default FirstFrame;