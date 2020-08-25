import React, { Fragment, useState } from "react";
import "./GadgetHorizontal.style.css";
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
import ProductCardHor from "../../product-card/ProductCardHorizontal";

const HorizontalGadget = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <Container className="mt-5">
        <Row className="border-bottom">
          <Col md={6} sm={12} xm={12}>
            <h2 class="xs-content-title float-left text-align-center mb-mbl">
            Hurry up! Special offers.
            </h2>
          </Col>
          <Col md={6} sm={12} xm={12}>
            <Nav tabs className="float-right">
              <NavItem className="hover-pointer nav nav-tabs xs-nav-tab">
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Tab1
                </NavLink>
              </NavItem>
              <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ml-3">
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  More Tabs
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>

        <Container className="mt-5">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <ProductCardHor col={props.col} />
                <ProductCardHor col={props.col} />
                <ProductCardHor col={props.col} />
                <ProductCardHor col={props.col} />
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
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

export default HorizontalGadget;
