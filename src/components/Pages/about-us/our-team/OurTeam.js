import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import TeamCard from "./team-card/TeamCard";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <Fragment>
      <Container className="marg-top10">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="mx-auto">
            <h2 class="xs-heading-sub text-center">ANGELS</h2>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="mx-auto">
            <h3 class="xs-heading-title text-center">Meet with our Team</h3>
          </Col>
        </Row>
        <Row>
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </Row>
      </Container>
    </Fragment>
  );
};

export default OurTeam;
