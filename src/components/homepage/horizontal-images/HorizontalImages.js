import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

export const HorizontalImages = () => {
  return (
    <Fragment>
      <Container>
        <Row className="xs-brand-content clearfix version-2">
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('../../../assets/images/sponsors/sponsors_12.png')} alt="image 1"/>
          </Col>
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('')} alt="image 1"/>
          </Col>
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('')} alt="image 1"/>
          </Col>
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('')} alt="image 1"/>
          </Col>
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('')} alt="image 1"/>
          </Col>
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('')} alt="image 1"/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
