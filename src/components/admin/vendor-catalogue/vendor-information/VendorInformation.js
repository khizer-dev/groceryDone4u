import React, { Fragment, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Table,
  CardHeader,
  CardBody,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./VendorInformation.style.css";
import { Link } from "react-router-dom";
import VendorInformationTable from "./vendor-info-table/VendorInfoTable";

const VendorInformation = () => {
  return (
    <Fragment>
      <Container>
        <Card>
          <Row>
            <Col lg={12} md={12}>
              <Row>
                <Col lg={9} md={9} sm={9} xs={9}>
                  <Input
                    type="textbox"
                    name="vendor-search"
                    placeholder="serach here..."
                    className="width-100 height-100"
                  />
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <Link to={'/vendor-form'}>
                    <Button color={"primary"} className=" width-100">
                      Add vendor
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col lg={12} md={12}>
              <VendorInformationTable />
            </Col>
          </Row>
        </Card>
      </Container>
    </Fragment>
  );
};

export default VendorInformation;
