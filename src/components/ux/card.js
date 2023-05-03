import React from "react";
import classes from "./card.module.css";


export default function Card (props) {
    // const [isHovering, setIsHovering] = useState(false);

    // function handleMouseEnter() {
    //     setIsHovering(true)
        
    // }
    // function handleMouseLeave() {
    //     setIsHovering(false)
    // }

    // return (<div className={classes.container} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
    //     {!isHovering && <img className={classes.images} src={props.data.image} alt="docker" />}
    //     {isHovering && <div className={classes.cards}>
    //         <div className={classes.description}>{props.data.Description}</div>
    //         <button className={classes.button}><a className={classes.link} href={props.data.github}>Visit Github</a></button>
    //         </div>}
    //     </div>);
    return (<div className={classes.container}>
        <img className={classes.images} src={props.data.image} alt="docker" />
 
        <div className={classes.cards}>
            <div className={classes.description}>{props.data.Description}</div>
            <div className={classes.sub_container}>
                <a href={props.data.github}><button className={classes.button} > Code</button></a>
            </div>
            </div>
        </div>);
}