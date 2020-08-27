import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import './OurHistory.style.css';

const OurHistory = () => {
  return (
    <Fragment>
      <Container>
        <Row className="text-left marg-top-10">
          <Col lg={7} md={7} >
            <div class="xs-about-content">
              <div class="about-info">
                <h4>OUR HISTORY</h4>
                <h5>Creative and renovate fashion trends</h5>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play maintain networks. Dynamically usable
                  procrastinate B2B users after installed base benefits.
                  Dramatically visualize customer directed convergence without
                  revolutionary ROI.
                </p>
              </div>
              <ul class="fact-list">
                <li class="single-fact-item">
                  <h5>12</h5>
                  <h6>Years Experience</h6>
                </li>
                <li class="single-fact-item">
                  <h5>20K</h5>
                  <h6>Happy Customers</h6>
                </li>
                <li class="single-fact-item">
                  <h5>100%</h5>
                  <h6>Clients Satisfaction</h6>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={5} md={5} >
            <img
              src={require("../../../../assets/images/about_us_img_1.png")}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default OurHistory;
