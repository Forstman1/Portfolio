import { React } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";




export default function NavBar() {
    return (<div className={classes.container}> 
        <h1 className={classes.logo}>SAMI HAFID</h1>
        <div>
            {/* <ul className={classes.list}> */}
                {/* <li> <Link to="/"  className={classes.link}>HOME</Link> </li>
                <li><Link to="/projects" className={classes.link}> PROJECTS </Link></li>
                <li> <Link to="/contact" className={classes.link} id={classes.contact}> CONTACT</Link></li> */}
            {/* </ul> */}
            <button className="hamburger">
              {/* <!-- material icons https://material.io/resources/icons/ --> */}
              <i class="menuIcon material-icons">menu</i>
              <i class="closeIcon material-icons">close</i>
            </button>
        </div>
    </div>)
} 





// export default function NavBar() {
//     const [menuOpen, setMenuOpen] = useState(false);
  
//     return (
//       <div className={classes.container}>
//         <h1 className={classes.logo}>SAMI HAFID</h1>
//         <div>
//           <div className={menuOpen ? classes.menuButtonOpen : classes.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
//             <span>1</span>
//             <span>1</span>
//             <span>1</span>
//           </div>
//           <ul className={menuOpen ? classes.listOpen : classes.list}>
//             <li><Link to="/" className={classes.link}>HOME</Link></li>
//             <li><Link to="/projects" className={classes.link}>PROJECTS</Link></li>
//             <li><Link to="/contact" className={`${classes.link} ${classes.contact}`} id="contact">CONTACT</Link></li>
//           </ul>
//         </div>
//       </div>
//     );
//   }