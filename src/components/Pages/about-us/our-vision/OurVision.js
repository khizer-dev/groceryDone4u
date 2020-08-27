import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import "./OurVision.style.css";

const OurVision = () => {
  return (
    <Fragment>
      <Container>
        <Row className="text-left marg-top-10 mar-top">
          <Col lg={5} md={5} >
            <img
              src={require("../../../../assets/images/about_us_img_2.png")}
              alt=""
            />
          </Col>
          <Col lg={7} md={7} >
            <div class="xs-about-content">
              <div class="about-info">
                <h4>Our vision</h4>
                <h5>We are marketpress</h5>
                <p>
                  Dynamically procrastinate B2C users after installed base
                  benefits. Dramatically visualize customer directed convergence
                  without revolutionary ROI.
                </p>
              </div>
              <ul class="xs-list check">
                <li>Credibly innovate granular internal </li>
                <li>Grantedly underconstructions reloaded</li>
                <li>Interactively procrastinate high-payoff</li>
                <li>Completely synergize resource taxing relationships</li>
              </ul>
              {/* <span class="xs-watermark-text">VISION</span> */}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default OurVision;
