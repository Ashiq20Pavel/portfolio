import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";
import Phone from "../../Assets/phone.png";
import Email from "../../Assets/email.png";
import Address from "../../Assets/address.png";
import { useRef, useState } from "react";
import Particle from "../Particle";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4ew4mke",
        "template_1a4dykz",
        formRef.current,
        "d2yRljk6WLWTqMRd7"
      )

      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title ">Contact me with...</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +8801714-271620
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              firoze.hossain01@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Road-01/A, Nikunjo 2, Dhaka-1229
            </div>
          </div>
          
        </div>
        <div className="c-right">
        <p className="c-desc">
        <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
             Get in <strong className="purple">Touch</strong>
            </h2> 
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input className="text-white" style={{backgroundColor: "whitesmoke "}}  type="text" placeholder="Name" name="user_name" autoComplete="off" />
            <input className="text-white" style={{backgroundColor:  "whitesmoke " }} type="text" placeholder="Subject" name="user_subject" autoComplete="off" />
            <input className="text-white" style={{backgroundColor: "whitesmoke "}} type="text" placeholder="Email" name="user_email" autoComplete="off"/>
            <textarea className="text-white" style={{backgroundColor: "whitesmoke"}} rows="5" placeholder="Message" name="message" autoComplete="off"/>
            <div style={{paddingBottom: "15px"}}>
            <button>Submit</button>
            </div>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
    
    </Container>
    </Container>
  );
};

export default Contact;