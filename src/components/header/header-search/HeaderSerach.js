import React, { Fragment } from "react";
import {Link} from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Input,
} from "reactstrap";
import "../../../assets/css/custom.css";

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
          <Col lg={8} sm={12} xs={12} className="pt-3">
            <form class="xs-navbar-search">
              <Container fluid>
                <Row>
                  <Col lg={6} md={4} sm={5} xs={5}>
                    <Input
                    type="search"
                    placeholder="Find your product"
                    className=" textbox-search"
                  />
                  
                  </Col>
                  <Col lg={4} sm={5} xs={5} >
               
                    <div class="xs-category-select-wraper pt-2">
                    <select class="xs-category-select">
                      <option value="0">All Categories</option>
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
                      <option value="watches">Watches</option>
                      <option value="toys-hobbies">Toys &amp; Hobbies</option>
                      <option value="weddings-events">
                        Weddings &amp; Events
                      </option>
                      <option value="novelty-special-use">
                        Novelty &amp; Special Use
                      </option>
                      <option value="automobiles-motorcycles">
                        Automobiles &amp; Motorcycles
                      </option>
                      <option value="lights-lighting">
                        Lights &amp; Lighting
                      </option>
                      <option value="furniture">Furniture</option>
                      <option value="electronic-components-supplies">
                        Electronic Components &amp; Supplies
                      </option>
                      <option value="office-school-supplies">
                        Office &amp; School Supplies
                      </option>
                      <option value="home-appliances">Home Appliances</option>
                      <option value="home-improvement">Home Improvement</option>
                      <option value="security-protection">
                        Security &amp; Protection
                      </option>
                      <option value="tools">Tools</option>
                      <option value="hair-extensions-wigs">
                        Hair Extensions &amp; Wigs
                      </option>
                    </select>
                  </div>
                  </Col>
                  <Col lg={2} sm={2} xs={2} >
                 
                    {/* <div class="input-group-btn "> */}
                   
                    <button
                      type="submit"
                      class="btn btn-primary height-40 margin-left-3pc pt-3" 
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  {/* </div> */}
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HeaderSerach;
