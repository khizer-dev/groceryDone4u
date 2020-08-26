import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

 const HorizontalImages = () => {
  return (
    <Fragment>
      <Container>
          <h3 className="mb-5 mt-5">Sponsered by</h3>
        <Row className="xs-brand-content clearfix version-2">
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('../../../assets/images/sponsors/sponsors_12.png')} alt="image 1"/>
          </Col>
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('../../../assets/images/sponsors/sponsors_13.png')} alt="image 1"/>
          </Col>
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('../../../assets/images/sponsors/sponsors_14.png')} alt="image 1"/>
          </Col>
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('../../../assets/images/sponsors/sponsors_15.png')} alt="image 1"/>
          </Col>
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('../../../assets/images/sponsors/sponsors_16.png')} alt="image 1"/>
          </Col>
          <Col lg={2} md={2} sm={4} sm={6}>
          <img src={require('../../../assets/images/sponsors/sponsors_17.png')} alt="image 1"/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HorizontalImages;