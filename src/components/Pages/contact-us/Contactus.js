import React, { Fragment } from "react";
import ContactusForm from "./contact-form/ContactUsForm";
import { Card, CardTitle, CardBody, Container } from "reactstrap";

const Contactus = () => {
  return (
    <Fragment>
      <Container className="mt-3">
        <Card className="shadow">
          <CardTitle>
            <h1 className="text-center mt-5">Get in touch</h1>
            <h5 className="text-center mt-2">
              Fundpress site thoughtfully designed for real humans which means
              the best user experience <br /> for your entire community of
              donors, fundraisers, customers, and staff.
            </h5>
          </CardTitle>
          <CardBody>
            <ContactusForm />
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Contactus;
