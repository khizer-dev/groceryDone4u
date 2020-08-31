import React, { Fragment, useState } from "react";
import "./ProductTab.style.css";
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
// import ProductCard from "../../product-card/ProductCard";
import TableDescription from "./table-description/TableDescription";

const ProductTab = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <Container className="mt-5">
        <Row className="border-bottom">
          <Col md={12} sm={12} xm={12}>
            <Nav tabs className="float-left">
              <NavItem className="hover-pointer nav nav-tabs xs-nav-tab">
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Description
                </NavLink>
              </NavItem>
              <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ml-3">
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Additional Information
                </NavLink>
              </NavItem>
              <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ml-3">
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Reviews
                </NavLink>
              </NavItem>
              <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ml-3">
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  Shipping
                </NavLink>
              </NavItem>
              <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ml-3">
                <NavLink
                  className={classnames({ active: activeTab === "5" })}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  Shipping & Payment
                </NavLink>
              </NavItem>
              <NavItem className="hover-pointer nav nav-tabs xs-nav-tab ml-3">
                <NavLink
                  className={classnames({ active: activeTab === "6" })}
                  onClick={() => {
                    toggle("6");
                  }}
                >
                  Seller Guarantees
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>

        <Container className="mt-5">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col>
                  <TableDescription />
                </Col>
                <Col>
                  <TableDescription />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col>
                  <TableDescription />
                </Col>
                <Col>
                  <TableDescription />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
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

export default ProductTab;
