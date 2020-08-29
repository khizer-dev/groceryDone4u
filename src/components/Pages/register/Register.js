import React, { Fragment } from "react";
import { Container } from "reactstrap";
import RegisterForm from "./register-form/RegisterForm";

const Register = () => {
  return (
    <Fragment>
      <Container>
        <RegisterForm />
      </Container>
    </Fragment>
  );
};

export default Register;
