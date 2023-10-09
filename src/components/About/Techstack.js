import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiJava,
    DiGit,
} from "react-icons/di";
import {
    SiSpringboot,
    SiSpring,
    SiSpringsecurity,
    SiHibernate,
    SiMysql,
    SiAngular,
    SiOracle,
    SiThymeleaf,
    SiDocker,
    SiKubernetes
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpring/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringsecurity/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHibernate/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAngular/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiThymeleaf/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiOracle/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
        </Row>
    );
}

export default Techstack;
