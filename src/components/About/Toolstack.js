import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiApachemaven,
    SiIntellijidea,
    SiJenkins,
    SiWebstorm,
    SiVercel
} from "react-icons/si";
import {
    DiEclipse,
    DiNetbeans

} from "react-icons/di";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebstorm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJenkins/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVercel/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiEclipse/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNetbeans/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiApachemaven/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHeroku/>
            </Col>
        </Row>
    );
}

export default Toolstack;
