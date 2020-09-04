import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Input,
  FormGroup,
  Form,
  Label,
  FormText,
} from "reactstrap";
import Switch from "@material-ui/core/Switch";

const VendorRegistration = () => {
  const [isLicence, setIsLicence] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setIsLicence({ ...isLicence, [event.target.name]: event.target.checked });
  };

  return (
    <Fragment>
      <Container>
        <Form>
          <Row>
            <Col>
              <Card>
                <CardHeader>Vendor Form</CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      {" "}
                      <FormGroup>
                        <Label for="exampleEmail">First name</Label>
                        <Input
                          type="text"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="exampleEmail">Last name</Label>
                        <Input
                          type="text"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {" "}
                      <FormGroup>
                        <Label for="exampleEmail">Email / User name</Label>
                        <Input
                          type="text"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="exampleEmail">Password</Label>
                        <Input
                          type="password"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="3" md="3" sm="6" xs="6">
                      <FormGroup>
                        <Label for="exampleEmail">Country</Label>
                        <Input type="select" placeholder="select country">
                          <option value="">Select country</option>
                          <option value="">Pakistan</option>
                          <option value="">Afgahanista</option>
                          <option value="">Sri Lanka</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg="3" md="3" sm="6" xs="6">
                      <FormGroup>
                        <Label for="exampleEmail">State</Label>
                        <Input type="select" placeholder="select country">
                          <option value="">Select state</option>
                          <option value="">Pakistan</option>
                          <option value="">Afgahanista</option>
                          <option value="">Sri Lanka</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg="3" md="3" sm="6" xs="6">
                      <FormGroup>
                        <Label for="exampleEmail">City</Label>
                        <Input type="select" placeholder="select country">
                          <option value="">Select city</option>
                          <option value="">Pakistan</option>
                          <option value="">Afgahanista</option>
                          <option value="">Sri Lanka</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg="3" md="3" sm="6" xs="6">
                      <FormGroup>
                        <Label for="exampleEmail">Area</Label>
                        <Input type="select" placeholder="select country">
                          <option value="">Select area</option>
                          <option value="">Pakistan</option>
                          <option value="">Afgahanista</option>
                          <option value="">Sri Lanka</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="exampleEmail">Business</Label>
                        <Input
                          type="text"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="exampleFile">Image upload</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">upload vendor image</FormText>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="exampleFile">Business Logo</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">upload business logo</FormText>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="exampleEmail">Person in charge</Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="exampleEmail">Zip code</Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="exampleEmail">NTN</Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mt-2">
                      {" "}
                      <Switch
                        checked={isLicence.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />{" "}
                      Do you have Valid License to sell?
                    </Col>
                    <Col className="mt-2">
                      {" "}
                      <Switch
                        checked={isLicence.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />{" "}
                      Do you own any brand that you are selling?
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="exampleEmail">
                          How do you supply Geographically?
                        </Label>
                        <Input type="select" placeholder="select country">
                          <option value="">National</option>
                          <option value="">International</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    </Fragment>
  );
};

export default VendorRegistration;
