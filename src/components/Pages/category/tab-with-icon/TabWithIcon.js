import React, { Fragment, useState } from "react";
import "./TabWithIcon.style.css";
import "../../../homepage/gadget/Gadget.style.css";
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
import ProductCard from "../../../product-card/ProductCard";

const TabWithIcon = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <Container className="mt-5">
        <Row className="border-bottom">
          <Col md={12} sm={12} xs={12}>
            <Nav tabs className="float-center">
              <Row>
                <Col lg={2} md={2} sm={6} xs={6}>
                  <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ">
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      <i className="fa fa-desktop fa-2x pb-3 pl-5 pt-2"></i>
                     <h5 className="text-center pt-2"> Computer</h5>
                     <h6 className="text-center">300 Items Available</h6>
                    </NavLink>
                  </NavItem>
                </Col>
                <Col lg={2} md={2} sm={6} xs={6}>
                  <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ">
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      <i className="fa fa-mobile pb-3 fa-3x pl-5 pt-0"></i>
                      <h5 className="text-center"> Mobile Phone</h5>
                     <h6 className="text-center ">250 Items Available</h6>
                    </NavLink>
                  </NavItem>
                </Col>
                <Col lg={2} md={2} sm={6} xs={6}>
                  <NavItem className="hover-pointer nav nav-tabs xs-nav-tab">
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      <i class="fa fa-bolt fa-3x pb-3 pl-5 pr-5"></i>
                      <h5 className="text-center"> Electronics</h5>
                     <h6 className="text-center ">350 Items Available</h6>
                    </NavLink>
                  </NavItem>
                </Col>
                <Col lg={2} md={2} sm={6} xs={6}>
                  <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ml-3 ">
                    <NavLink
                      className={classnames({ active: activeTab === "4" })}
                      onClick={() => {
                        toggle("4");
                      }}
                    >
                      <i class="fa fa-laptop fa-3x pb-3 pl-5 pr-5"></i>
                      <h5 className="text-center"> Laptop</h5>
                     <h6 className="text-center ">200 Items Available</h6>
                    </NavLink>
                  </NavItem>
                </Col>
                <Col lg={2} md={2} sm={6} xs={6}>
                  <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ml-3 mar-right-mbl">
                    <NavLink
                      className={classnames({ active: activeTab === "5" })}
                      onClick={() => {
                        toggle("5");
                      }}
                    >
                      <i className="fa fa-cogs fa-3x pb-3 pl-5 pr-5"></i>
                      <h5 className="text-center"> Mechanics</h5>
                     <h6 className="text-center ">230 Items Available</h6>
                    </NavLink>
                  </NavItem>
                </Col>
                <Col lg={2} md={2} sm={6} xs={6}>
                  <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ml-3 ">
                    <NavLink
                      className={classnames({ active: activeTab === "6" })}
                      onClick={() => {
                        toggle("6");
                      }}
                    >
                      <i class="fa fa-user fa-3x pb-3 pl-5 "></i>
                      <h5 className="text-center"> Other</h5>
                     <h6 className="text-center">300 Items Available</h6>
                    </NavLink>
                  </NavItem>
                </Col>
              </Row>
            </Nav>
          </Col>
        </Row>

        <Container className="mt-5">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <ProductCard col={3} />
                <ProductCard col={3} />
                <ProductCard col={3} />
                <ProductCard col={3} />
                <ProductCard col={3} />
                <ProductCard col={3} />
                <ProductCard col={3} />
                <ProductCard col={3} />
                <ProductCard col={3} />
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

export default TabWithIcon;
