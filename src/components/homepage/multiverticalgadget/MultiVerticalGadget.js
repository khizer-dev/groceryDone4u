import React, { Fragment } from "react";
import {
  Row,
  Col,
  Container,
} from "reactstrap";
import VerticalGadget from "../vertical-gadget/VerticalGadget.js";

 const MultiVerticalGadget = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <VerticalGadget title={"Featured Products"} />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
          <VerticalGadget title={"Trending Products"} />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
          <VerticalGadget title={"Hot Products"} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default MultiVerticalGadget;