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
  Card,
  FormGroup,
  Label,
  Button,
  CardTitle,
} from "reactstrap";
import "./LoginForm.style.css";

const LoginForm = () => {
  return (
    <Fragment>
      <CardBody>
        <Container>
          <Row>
            <Col lg={3} md={3} sm={12} xs={12}></Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Card>
                <CardTitle>
                  <h2 className="text-center">Login form</h2>
                </CardTitle>
                <CardBody>
                  <Row>
                    <Col>
                      <InputGroup className="mt-5">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user"> </i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="username or email" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup className="mt-5">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i class="fa fa-unlock-alt"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="password" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Button color="primary" className=" ml-3 mt-4 full-width">Login</Button>
                  </Row>
                  <h4 className="text-center mt-3">Or</h4>
                  <Row>
                    <Button color="primary"  className ="ml-3 mt-4 full-width">
                      Login with Facebook
                    </Button>
                  </Row>
                  <Row>
                    <Button color="danger" className="ml-3 mt-4 full-width">
                      Login with Gmail
                    </Button>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg={3} md={3} sm={12} xs={12}></Col>
          </Row>
        </Container>
      </CardBody>
    </Fragment>
  );
};

export default LoginForm;
