import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Input,
  Button,
} from "reactstrap";
import "../../../assets/css/custom.css";
import "./HeaderSearch.style.css";

const HeaderSerach = () => {
  return (
    <Fragment>
      <Container className="mt-4">
        <Row>
          <Col lg={4} sm={12} xs={12} className="">
            <div className="xs-logo-wraper">
              <Link to="/">
                <img
                  src={require("../../../assets/images/logo-secondary.png")}
                />
              </Link>
            </div>
          </Col>
          <Col lg={8} sm={12} xs={12}>
            <div class="border-style">
              <Container>
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5} className="border-right">
                    <Input
                      type="search"
                      placeholder="Find your product"
                      className="boder-style-none width-100 marg-top-7"
                    />
                  </Col>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <Input
                      type="select"
                      name="select"
                      className="boder-style-none half-width pt-2 pl--4"
                    >
                      <option value="women's-clothing-accessories">
                        Women's Clothing &amp; Accessories
                      </option>
                      <option value="men's-clothing-accessories">
                        Men's Clothing &amp; Accessories
                      </option>
                      <option value="cellphones-telecommunications">
                        Cellphones &amp; Telecommunications
                      </option>
                      <option value="computer-office">
                        Computer &amp; Office
                      </option>
                      <option value="consumer-electronics">
                        Consumer Electronics
                      </option>
                      <option value="jewelry-accessories">
                        Jewelry &amp; Accessories
                      </option>
                      <option value="home-garden">Home &amp; Garden</option>
                      <option value="luggage-bags">Luggage &amp; Bags</option>
                      <option value="shoes">Shoes</option>
                      <option value="mother-kids">Mother &amp; Kids</option>
                      <option value="sports-entertainment">
                        Sports &amp; Entertainment
                      </option>
                      <option value="beauty-health">Beauty &amp; Health</option>
                    </Input>
                  </Col>
                  <Col lg={2} sm={2} xs={2}>
                    <Button color="primary" className="float-right ml-5 size half-width">
                      <i class="fa fa-search"></i>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HeaderSerach;
