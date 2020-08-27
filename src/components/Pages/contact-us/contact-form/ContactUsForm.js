import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CardBody,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import './ContactusForm.style.css'

const ContactUsForm = () => {
  return (
    <Fragment>
      <Container>
        <CardBody>
          <Row>
            <Col>
              <InputGroup className="mt-5">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-user"> </i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="username" />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup className="mt-5">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                  <i class="fa fa-envelope"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="email" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12}>
            <InputGroup className="mt-5">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                  <i class="fa fa-book"></i></InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Subject" />
              </InputGroup>
              <InputGroup className="mt-5">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><i class="fa fa-info"></i></InputGroupText>
                </InputGroupAddon>
                <Input type="textarea" placeholder="Description" />
              </InputGroup>
            </Col>
            <Col lg={12} md={12 }>
              <Button color="primary" className="p-4 mt-5 badge badge-pill btn-lg btn-width">Get a Query</Button>
            </Col>
          </Row>
        </CardBody>
      </Container>
    </Fragment>
  );
};

export default ContactUsForm;
