import React from "react";
import { Container, Row, Col } from "reactstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../assets/css/custom.css';

const HeaderFeature = () => {
  return (
    <div className="xs-top-bar version-gray d-none d-md-none d-lg-block">
    <Container >
      <Row>
        <Col lg={6}>
          <Row className="mobile-hide">
            <Col lg={6} className="text-center">
              <ul className="xs-top-bar-info">
                <li>
                  <a>
                    <i className="icon icon-van "></i>Free Delivery
                  </a>
                </li>
                <li>
                  <a>Return Policy</a>
                </li>
              </ul>
            </Col>
            <Col lg={6} className="text-center">
              <ul className="xs-social-list">
                <li className="xs-list-text">Follow Us</li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faHome} />
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fas fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <ul className="xs-top-bar-info right-content">
            <li>
              <select name="money" className="xs-select">
                <option value="">Select</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
            </li>
            <li>
              <select name="language" className="xs-select">
                <option value="">Select</option>
                <option value="eng">English</option>
                <option value="rus">Russian</option>
                <option value="spn">Spain</option>
              </select>
            </li>
            <li>
              <a data-toggle="modal" data-target=".xs-modal">
                Login
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default HeaderFeature;
