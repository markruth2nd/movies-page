import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logoRequestPage from "../images/logo.png";

const MovieRequest = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_kllagzy',
            'template_2k7tzik',
            form.current,
            '3xIWOQx_cbX53gitG')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent, I'll reply shortly")
            }, (error) => {
                console.log(error.text);
            });
    };

    return <div className="">
        <div className="logoRequestPage">
            <a href={"/"} className="">
                <img className="logoRequestPage" src={logoRequestPage} alt="logoRequestPage" />
                </a>
                </div>
                <h1 className="requestHeader">
                    Movie Request
                </h1>
                <p className="requestInfo">
                    Here at Search4movies we aim to deliver the best service to all our fans. If you cant find your favorite Movie, Anime, or Game feel free to drop us an email with any Movie Request!
                </p>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form> 
        {/* This really should be there but cant figure out why the back ground cuts page in half */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>


}

export default MovieRequest;
