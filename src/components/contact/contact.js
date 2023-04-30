import NavBar from "../ux/navbvar";
import avatar from "../../images/avatar.svg"
import classes from "./contact.module.css"
import { useRef } from "react";
import emailjs from "@emailjs/browser"
import Typed from 'react-typed';


export default function Contact () {

    const form = useRef();

    const sendEmail = () => {
  
      emailjs.sendForm('service_9fsfgvb', 'template_fll9v0d', form.current, 'eRwYJ-R8cajzBF7uZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  


    return (<div>
        <NavBar />

        <div className={classes.container}>
            <img className={classes.image} src={avatar} alt="avatar"/>
            <h3><Typed strings={['Thanks for taking the time to reach out.']} typeSpeed={40}/></h3>
            <h3>How can I help you today?'</h3>

            <form className={classes.form} ref={form} onSubmit={sendEmail}>
                <div className={classes.contact}>
                    <div className={classes.first}>
                        <label>Name</label>
                        <input type="text" name="from_name" className={classes.input1}></input>
                    </div>
                    <div className={classes.first}>
                        <label>Email</label>
                        <input type="email" name="user_email" className={classes.input1}></input>
                    </div>
                </div>


                <div className={classes.message}>
                    <label className={classes.label}>Message</label>
                    <input type="text" name="message" className={classes.input}></input>
                </div>

                <button className={classes.button}>Submit</button>
            </form>
        </div>
    </div>)
}