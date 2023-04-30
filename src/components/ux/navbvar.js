import { React } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";




export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    
    return (<div className={classes.container}> 
        <h1 className={classes.logo}>SAMI HAFID</h1>
        <div className={classes.humberger}>



            <div className={`${classes.menuIcon} ${isOpen && classes.menuIconOpen}`} onClick={toggleMenu}>
                <span className={classes.menuIconTop}></span>
                <span className={classes.menuIconMiddle}></span>
                <span className={classes.menuIconBottom}></span>
            </div>
            
            {/* <ul className={ !isOpen ? classes.list : classes.smalllist }>
                 <li> <Link to="/"  className={ classes.link }>HOME</Link> </li>
                <li><Link to="/projects" className={ classes.link }> PROJECTS </Link></li>
                <li> <Link to="/contact" className={ classes.link } id={classes.contact }> CONTACT</Link></li> 
            </ul> */}
            <div className={ !isOpen ? classes.list : classes.smalllist }>
                 <li> <Link to="/"  className={ classes.link }>HOME</Link> </li>
                <li><Link to="/projects" className={ classes.link }> PROJECTS </Link></li>
                <li> <Link to="/contact" className={ classes.link } id={classes.contact }> CONTACT</Link></li> 
            </div>

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