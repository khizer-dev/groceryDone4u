import React, { Fragment, useState } from "react";
import "./VerticalGadget.style.css";
import PropTypes from 'prop-types';
import {RiArrowLeftSLine , RiArrowRightSLine } from 'react-icons/ri';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";

import classnames from "classnames";

const VerticalGadget = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <Container className="mt-5 border-right">
        <Row className="border-bottom">
          <Col md={7} sm={12} xm={12}>
            <h3 class="xs-content-title float-left  mb-mbl">
              {props.title}
            </h3>
          </Col>
          <Col md={5} sm={12} xm={12}>
            <Nav tabs className="float-right">
              <div className="hover-pointer" style={{paddingRight: 0}} >
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <RiArrowLeftSLine size={20} />
                </NavLink>
              </div>
              <div className="hover-pointer " style={{paddingRight: '0px'}}>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <RiArrowRightSLine size={20}/>
                </NavLink>
              </div>
            </Nav>
          </Col>
        </Row>

        <Container className="mt-5">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Row className="border-bottom">
                    <Col md={3}>image</Col>
                    <Col md={9}>
                      <h5 className="p-title">Tablet Thin EliteBook Revolve</h5>
                      <span class="price small">
                        $235.00
                        <del>$290.00</del>
                      </span>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <Row className="border-bottom">
                    <Col md={3}>image</Col>
                    <Col md={9}>
                      <h5 className="p-title">Tablet Thin EliteBook Revolve</h5>
                      <span class="price small">
                        $235.00
                        <del>$290.00</del>
                      </span>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <Row className="border-bottom">
                    <Col md={3}>image</Col>
                    <Col md={9}>
                      <h5 className="p-title">Tablet Thin EliteBook Revolve</h5>
                      <span class="price small">
                        $235.00
                        <del>$290.00</del>
                      </span>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <Row className="border-bottom">
                    <Col md={3}>image</Col>
                    <Col md={9}>
                      <h5 className="p-title">Tablet Thin EliteBook Revolve</h5>
                      <span class="price small">
                        $235.00
                        <del>$290.00</del>
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="12">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="12">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="12">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </Container>
    </Fragment>
  );
};

VerticalGadget.propTypes = {
title: PropTypes.string.isRequired
};

export default VerticalGadget;
