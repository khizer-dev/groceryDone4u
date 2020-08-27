import React, { Fragment } from "react";
import { Container, CardBody, Card } from "reactstrap";
import Loginform from "./login-form/LoginForm";

const Login = () => {
  return (
    <Fragment>
      <Container className="mt-5">
        <Loginform />
      </Container>
    </Fragment>
  );
};

export default Login;
