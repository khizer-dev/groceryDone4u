import React, { Fragment } from "react";
import './Footer.style.css';
import { Container, Row, Col } from "reactstrap";

export const Footer = () => {

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <Fragment>
      <footer className="xs-footer-section">
        <div className="xs-footer-main">
          <Container>
            <Row>
              <Col lg={4} className="text-left">
                <div className="col-lg-1.png2">
                  <div className="xs-footer-logo text-left">
                    <img src={require("../../assets/images/logo.png")} alt="" />
                  </div>
                </div>

                <div className="media">
                  <div className="media-body">
                    <Row>
                      <Col lg="2">
                        <i class="fa fa-phone fa-3x"></i>
                      </Col>
                      <Col>
                        <h5>
                          Got Question? Call us 24/7{" "}
                          <strong>[80] 1017 197</strong>
                        </h5>
                        <address>
                          17 Princess Road, London, Greater London NW1 8JR, UK
                        </address>
                        <a
                          href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                          className="xs-map-popup btn btn-primary"
                        >
                          <i className="icon icon-placeholder"></i>View On Map
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="text-left">
                <div className="media-body pading-top mb-5">
                  <Row>
                    <Col lg={2}>
                      <i class="fa fa-phone fa-3x"></i>
                    </Col>
                    <Col>
                    <h5>
                      We Using <strong>Safe Payments</strong>
                    </h5>
                    <ul className="xs-payment-card">
                      <li>
                        <img
                          src={require("../../assets/images/credit-cards/skril-1.png")}
                          alt="payment-icon-image"
                        />
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require("../../assets/images/credit-cards/palypal-1.png")}
                            alt="payment-icon-image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require("../../assets/images/credit-cards/american_express-1.png")}
                            alt="payment-icon-image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require("../../assets/images/credit-cards/amazon-1.png")}
                            alt="payment-icon-image"
                          />
                        </a>
                      </li>
                    </ul>
                    <div className="xs-footer-secure-info pt-3">
                      <h6>Secured by:</h6>
                      <ul className="footer-secured-by-icons">
                        <li>
                          <img
                            src={require("../../assets/images/secured/norton_av_logo.png")}
                            alt="norton"
                          />
                        </li>
                        <li>
                          <img
                            src={require("../../assets/images/secured/mcAfee_logo.png")}
                            alt="mcafee"
                          />
                        </li>
                      </ul>
                    </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={5} className="">
                <div className="footer-widget">
                  <Row className="marg-left">
                    <Col lg={6} className="text-left float-left mb-5 ">
                      <h3 className="widget-title">Our Store</h3>
                      <ul className="xs-list line-height-0.6">
                        <li>
                          <a href="#">New York</a>
                        </li>
                        <li>
                          <a href="#">London SF</a>
                        </li>
                        <li>
                          <a href="#">Cockfosters BP</a>
                        </li>
                        <li>
                          <a href="#">Los Angeles</a>
                        </li>
                        <li>
                          <a href="#">Chicago</a>
                        </li>
                        <li>
                          <a href="#">Las Vegas</a>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={6} className="text-left">
                      <h3 className="widget-title">Useful Links</h3>
                      <ul className="xs-list line-height-0.6">
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Returns</a>
                        </li>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Latest News</a>
                        </li>
                        <li>
                          <a href="#">Our Sitemap</a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
              {/* <div className="col-md-1.png2 col-lg-8 xs-footer-info-and-payment">
                <div className="col-lg-1.png2">
                  <div className="xs-footer-logo footer-logo-v2">
                  
                      <img
                        src={require("../../assets/images/logo.png")}
                        alt=""
                      />
                    
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 media">
                  <span className="icon icon-support d-flex"></span>
                  <div className="media-body">
                    <h5>
                      Got Question? Call us 24/7 <strong>[80] 1017 197</strong>
                    </h5>
                    <address>
                      17 Princess Road, London, Greater London NW1 8JR, UK
                    </address>
                    <a
                      href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                      className="xs-map-popup btn btn-primary"
                    >
                      <i className="icon icon-placeholder"></i>View On Map
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 media">
                  <span className="icon icon-highlight d-flex"></span>
                  <div className="media-body">
                    <h5>
                      We Using <strong>Safe Payments</strong>
                    </h5>
                    <ul className="xs-payment-card">
                      <li>
                        <a href="#">
                          <img
                            src={require("../../assets/images/credit-cards/skril-1.png")}
                            alt="payment-icon-image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require("../../assets/images/credit-cards/palypal-1.png")}
                            alt="payment-icon-image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require("../../assets/images/credit-cards/american_express-1.png")}
                            alt="payment-icon-image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require("../../assets/images/credit-cards/amazon-1.png")}
                            alt="payment-icon-image"
                          />
                        </a>
                      </li>
                    </ul>
                    <div className="xs-footer-secure-info">
                      <h6>Secured by:</h6>
                      <ul className="footer-secured-by-icons">
                        <li>
                          <img
                            src={require("../../assets/images/secured/norton_av_logo.png")}
                            alt="norton"
                          />
                        </li>
                        <li>
                          <img
                            src={require("../../assets/images/secured/mcAfee_logo.png")}
                            alt="mcafee"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 footer-widget">
                <h3 className="widget-title">Our Store</h3>
                <ul className="xs-list">
                  <li>
                    <a href="#">New York</a>
                  </li>
                  <li>
                    <a href="#">London SF</a>
                  </li>
                  <li>
                    <a href="#">Cockfosters BP</a>
                  </li>
                  <li>
                    <a href="#">Los Angeles</a>
                  </li>
                  <li>
                    <a href="#">Chicago</a>
                  </li>
                  <li>
                    <a href="#">Las Vegas</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-2 footer-widget">
                <h3 className="widget-title">Useful Links</h3>
                <ul className="xs-list">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                  <li>
                    <a href="#">Our Sitemap</a>
                  </li>
                </ul>
              </div> */}
            </Row>
          </Container>
        </div>
        <div className="xs-copyright copyright-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="xs-copyright-text">
                  &copy; 2018{" "}
                  <a href="https://themeforest.net/user/xpeedstudio/portfolio">
                    XpeedStudio
                  </a>{" "}
                  All Rights Reserved
                </div>
              </div>
              <div className="col-md-6">
                <ul className="xs-social-list version-2">
                  <li>
                    <a href="#">
                      <i className="icon icon-facebook"></i>Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-twitter"></i>Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-pinterest"></i>Pinterest
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-instagram"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="xs-back-to-top-wraper">
          <a href="#" onClick={scrollTop} className="xs-back-to-top btn btn-success">
            Back top<i class="fa fa-angle-right mr-2"></i>
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
