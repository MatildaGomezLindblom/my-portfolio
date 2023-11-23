import React, { useState, useRef } from "react";
import "../../styles/Contact.scss";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ButtonSecondary from "../ButtonSecondary";

function Contact() {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, errors, reset } = useForm();
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7gsn6xo",
        "template_cwx8gog",
        form.current,
        "V2uXvrjRLNlSSPVuo"
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          // show the user an error
        }
      );
    reset();
    setMessage("Done :)");
  };

  /* 
  useEffect(() => emailjs.init("V2uXvrjRLNlSSPVuo"), []);
  const onSubmit = async (data) => {

    await emailjs.send('service_7gsn6xo', 'template_cwx8gog', data, 'd5rmWdGbLaJzMsMkg_Xne')
      .then((result) => {
          console.log("result => " + result.text);
      }, (error) => {
          console.log("error => " + error.text);
      });
    
    reset();
    setMessage("Done :)");
  } */

  return (
    <div className="contact-container">
      <div className="contact-grid">
        <div className="contact-me-section">
          <form ref={form} onSubmit={onSubmit}>
            <label>Namn</label>
            <input type="text" name="name" />
            <label>Mejladress</label>
            <input type="email" name="email" />
            <label>Meddelande</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>

          {/* <form className='flex-container-column' onSubmit={handleSubmit((event) => onSubmit(event))}>

            <h1 style={{margin: "1rem", fontSize:"3rem"}}> Säg hej! </h1>
            <p>Kontakta mig här eller mejla <a style={{}} href="mailto:matildagoli@outlook.com">matildagoli@outlook.com</a></p>
            <div className='fields-container'>

              <label className='form-label' htmlFor='name'>Name</label>
              <input className='form-field' type='text' placeholder='Your name' name='name' ref={register({required:true, minLength: 9})}/>
              {errors.name && <span className='warning'>Invalid name (try your full name)</span>}

              <label className='form-label' htmlFor='email'>E-mail</label>
              <input className='form-field' type='email' placeholder='Your Email' name='email' ref={register({required:true, minLength: 11})}/>
              {errors.email && <span className='warning' >Invalid e-mail</span>}

              <label className='form-label' htmlFor='subject'>Subject</label>
              <input className='form-field' type='text' placeholder='Subject' name='subject' ref={register({required:true, minLength: 8, maxLength: 60})}/>
              {errors.subject && <span className='warning' >Invalid subject</span>}

              <label className='form-label' htmlFor='msg'>Message</label>
              <textarea className='form-text-area' type='text' placeholder='Your message' name='msg' ref={register({required:true, minLength: 13})}/>
              {errors.msg && <span className='warning' >Invalid message</span>}

            </div>

            <input className='form-btn' type='submit' value='Send'/>
            {!errors.name && !errors.email && !errors.subject && !errors.msg && <span style={{color: "green", margin: "1rem", fontSize: "2rem"}}>{message}</span>}

        </form> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
