import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Gadget from "../gadget/Gadget";
import Verticalgadget from "../vertical-gadget/VerticalGadget";

const CombineGadget = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={4} sm={12} xs={12}>
            <Verticalgadget title={"Featured Product"} />
          </Col>
          <Col md={8} sm={12} xs={12}>
            <Gadget col={4}/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CombineGadget;
