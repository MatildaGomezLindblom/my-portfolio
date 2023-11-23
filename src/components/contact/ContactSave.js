import React, { useState, useRef } from "react";
import "../../styles/Contact.scss";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ButtonSecondary from "../ButtonSecondary";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
/*   const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }

    setValidated(true);
    emailjs
      .sendForm(
        "service_7gsn6xo",
        "template_cwx8gog",
        form.current,
        "V2uXvrjRLNlSSPVuo"
      )
      .then(
        (result) => {
          console.log("sending:", form.current);
          // show the user a success message
        },
        (error) => {
          console.log("error => " + error.text);
        }
      );
}; */
  const [message, setMessage] = useState("");
  const { register, handleSubmit, errors, reset, formState } = useForm();
  const formRef = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_7gsn6xo",
        "template_cwx8gog",
        formRef.current,
        "V2uXvrjRLNlSSPVuo"
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          console.log("error => " + error.text);
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
{/*       <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Row} style={{padding: '10px'}}>
                            <FloatingLabel controlId="floatingName" label="Namn" className="formLabel">
                                <Form.Control type="name" placeholder="Name" rounded required className="roundedInput"/>
                                <Form.Control.Feedback type="invalid">
                                    Ange ditt namn
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Row} style={{padding: '10px'}}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Mejladress"
                            className="formLabel"
                        >
                            <Form.Control type="email" placeholder="name@example.com" required className="roundedInput"/>
                            <Form.Control.Feedback type="invalid">
                                Ange din mejladress
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        </Form.Group>
                        
                        <Form.Group as={Row} style={{padding: '10px'}}>
                            <FloatingLabel controlId="floatingTextarea2" label="Meddelande" style={{marginBottom: '1rem'}} className="formLabel">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '250px' }}
                                required
                                className="roundedInput"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Du måste skicka med ett meddelande
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        
                        <button
                            type="submit"
                            variant="primary"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                            >
                            Skicka
                        </button>

                    </Form>   */} 
      <div className="contact-grid">
        <div className="contact-me-section">
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <label>Namn</label>
            <input
              type="text"
              {...register("name", { required: "Detta fält är obligatoriskt", minLength: {
                value: 4,
                message: "Ange hela ditt namn tack",
              }, })}
            />
            {errors && <p className='warning'>{errors.name.message}</p>}

            <label>Mejladress</label>
            <input
              type="email"
              {...register("email", {
                required: "Detta fält är obligatoriskt",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ogiltid mejladress",
                },
              })}
            />
            {errors && errors.email && <p role="alert">{errors.email?.message}</p>}

            <label>Meddelande</label>
            <textarea
              {...register("message", { required: "Detta fält är obligatoriskt" })}
            />
            {errors && errors.message && <span className='warning'>{errors.message.message}</span>}

            <input
              type="submit"
              value="Send"
              disabled={formState.isSubmitting}
            />
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
        </div> </div> </div>

  );
}

export default Contact;
