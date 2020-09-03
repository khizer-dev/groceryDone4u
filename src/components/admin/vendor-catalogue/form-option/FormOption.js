import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import './FormOption.style.css';
import {BsPencil} from 'react-icons/bs';


const FormOption = () => {


  return (
    <Fragment>
      <Container className="mt-5">
        <Row >
            <Col lg={3} md={3}></Col>
            <Col>
          <Table className="font-family" bordered>
            <thead>
              <tr>
                <td>Form Name</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Order Product</td>
                <td>
                  <span><BsPencil /></span>
                  <span className="ml-3">x</span>
                </td>
              </tr>
              <tr>
                <td>Vendor Report</td>
                <td>
                  <span><BsPencil /></span>
                  <span className="ml-3">x</span>
                </td>
              </tr>
              <tr>
                <td>Vendor Business</td>
                <td>
                  <span><BsPencil /></span>
                  <span className="ml-3">x</span>
                </td>
              </tr>
            </tbody>
          </Table>
          </Col>
          <Col lg={3} md={3}></Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FormOption;
