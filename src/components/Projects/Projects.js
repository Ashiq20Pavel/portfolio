import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import iLife from "../../Assets/Projects/iLife.png";
import lifeInsurance from "../../Assets/Projects/Insuresoft.png";


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
              imgPath={lifeInsurance}
              isBlog={false}
              title="Life Insurance"
              description="InsurSoft is a complete integrated & web-enabled online life insurance solution. The product incorporates all functionalities necessary for business processes as well as financial management, investment insurance and other life insurance product management. InsurSoft is the market leader of local life insurance industry holding the highest number of local life installations in Bangladesh."
              link="https://leads.com.bd/insurance-solutions/life-insurance-solution/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
