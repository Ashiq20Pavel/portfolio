import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import {SiLeetcode} from "react-icons/si";
import {SiCodechef} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Md. Firoze Hossain</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Firoze</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/firoze-hossain"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/firoze-hossain/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/firoze_hossain/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.codechef.com/users/firoze_hossain"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiCodechef/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
