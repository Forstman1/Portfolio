import classes from "./cards.module.css";
import Card from "../ux/card"
import { Link } from "react-router-dom";


export default function Cards (props) {
    return (
    <div className={classes.bigcontainer}>
        <h2 className={classes.title}  style={{color: "#facf0f"}}>My Recent Projects</h2>
        <h3 className={classes.title}> Here are a few past projects I've worked on. Want to see more? <Link to="/contact" className={classes.contact}>Contact me.</Link></h3>
        <div className={classes.container}>
            <Card data={props.data[0]}/>
            <Card data={props.data[1]}/>
            <Card data={props.data[2]}/>
        
        </div>
<Link to="/projects" className={classes.button}>See More</Link>
    <div className={classes.separator}></div>
    </div>);
}