import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import iLife from "../../Assets/Projects/iLife.png";
import geninsurance from "../../Assets/Projects/geninsurance.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iLife}
              isBlog={false}
              title="i-life"
              description="i-Life offers a user-friendly interface, ensuring seamless access and convenience for policyholders across various devices, promoting widespread adoption of life insurance coverage. Additionally, its online platform allows customers to easily manage their policies, make premium payments, and access important information, enhancing the overall customer experience."
              link="https://leads.com.bd/insurance-solutions/internet-insurance-solution/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geninsurance}
              isBlog={false}
              title="General Insurance"
              description="A comprehensive software solution for general insurance can efficiently manage motor, marine, and fire insurance policies. It offers a user-friendly interface for policyholders to purchase, renew, and make claims seamlessly. The system incorporates robust risk assessment algorithms, enabling accurate premium calculations based on factors like vehicle type, cargo value, and property specifications.."
              link="https://www.codechef.com/users/firoze_hossain"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
