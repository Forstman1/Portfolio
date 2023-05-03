import { Link } from "react-router-dom";
import classes from "./firstframe.module.css";
import Typed from 'react-typed';
import images from "../../images/arrow.png";
import { useSpring, animated } from 'react-spring';

function FirstFrame (){

    const springs = useSpring({
        from: { y: 20 },
        to: { y: 100 },
        loop: true,
        config: { duration: 700, reset: true },
    })
    return (<div className={classes.container}>
        <h1 className={classes.text} id={classes.text}><Typed strings={['HEY, I\'M SAMI HAFID']} typeSpeed={10}/></h1>
        <h3 className={classes.text}>  <Typed strings={['I code beautifully simple things, and I love what I do.']} typeSpeed={40}/> </h3>
        <Link to="/projects" ><button className={classes.button} >PROJECTS</button></Link>
        <animated.div
        style={{
        width: 20,
        height: 50,
        borderRadius: 8,
        cursor: "pointer",
        textAlign:"center",
        ...springs,
      }}
    >
        <img src={images} alt="arrow" className={classes.image}/>
        </animated.div>
        
    </div>);    
}


export default FirstFrame;