import classes from "./firstframe.module.css";
import avatar from "../../images/avatar.svg";
import desktop from "../../images/desktop.svg";
import Typed from 'react-typed';


function FirstFrame (){

    return (<div className={classes.container}>
        <h1><Typed strings={['HELLO I AM SAMI. SOFTWARE ENGINEER']} typeSpeed={40}/></h1>
        <h3>  <Typed strings={['I code beautifully simple things, and I love what I do.']} typeSpeed={40}/> </h3>
        <img className={classes.avatar} src={avatar} alt="avatar" />
        <div ><img className={classes.desktop} src={desktop} alt="desktop" /></div>
        <div className={classes.separator}></div>
    </div>);    
}

export default FirstFrame;