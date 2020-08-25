import React, { Fragment, useState } from "react";
import "./VerticalGadget.style.css";
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

const VerticalGadget = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <Container className="mt-5 border-right">
        <Row className="border-bottom">
          <Col md={7} sm={12} xm={12}>
            <h2 class="xs-content-title float-left text-align-center mb-mbl">
              Featured Product
            </h2>
          </Col>
          <Col md={5} sm={12} xm={12}>
            <Nav tabs className="float-right">
              <NavItem className="hover-pointer ">
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <i class="fa fa-chevron-left "></i>
                </NavLink>
              </NavItem>
              <NavItem className="hover-pointer  ">
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <i className="fa fa-chevron-right"></i>
                </NavLink>
              </NavItem>
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

export default VerticalGadget;
