import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md. Firoze Hossain </span> 
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />Working as <span className="purple">Junior Software Engineer </span>at <span className="purple">Leads Corporation Limited.</span>
            <br />
            Completed BSc in Computer Science and Engineering at IUBAT—International University of Business Agriculture and Technology.
            <br />
          
            <br />
            
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Creative Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I enjoy evangelizing Java. In my heart of hearts, I'm an engineer, and what makes me happy is building something that works and having someone use it. That's cool."{" "}
          </p>
          <footer className="blockquote-footer">James Gosling</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
