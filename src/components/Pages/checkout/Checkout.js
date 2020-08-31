import React, { Fragment } from "react";
import { Container, Row, Col, Input, FormGroup } from "reactstrap";
import {Link} from 'react-router-dom';
import './Checkout.style.css';

const Checkout = () => {
  return (
    <Fragment>
      <Container className="mt-5">
        <div className="woocommerce cart-checkout-wraper">
          <Row>
            <Col lg={8} md={8}>
              <div class="checkout-form-group">
                <form action="#" method="post" class="xs-form sign_in_form">
                  <h4 class="xs-title">Login into your account</h4>
                  <div class="form-group">
                    <Row class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <Input
                            type="text"
                            class="form-control"
                            name="username"
                            placeholder="User name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <Input
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="Pasword"
                          />
                        </div>
                      </div>
                    </Row>
                  </div>
                  <div class="media justify-content-between">
                    <Link to="/login">
                      Create an account
                    </Link>
                    <a href="#" class="btn btn-primary">
                      Sign in
                    </a>
                  </div>
                </form>
                <form action="#" method="POST" class="xs-form billing-form">
                  <h4 class="xs-title">Billing details</h4>
                  <Row>
                    <Col md={6}>
                      <div class="form-group">
                        <Input
                          type="text"
                          name="fNmae"
                          placeholder="First name"
                          class="form-control"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div class="form-group">
                        <Input
                          type="text"
                          name="lNmae"
                          placeholder="Last name"
                          class="form-control"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div class="form-group">
                        <Input
                          type="text"
                          name="lNmae"
                          placeholder="Last name"
                          class="form-control"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div class="form-group">
                        <Input
                          type="text"
                          name="fNmae"
                          placeholder="Apt, Suit etc"
                          class="form-control"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div class="form-group">
                        <Input
                          type="text"
                          name="lNmae"
                          placeholder="City State"
                          class="form-control"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div class="form-group">
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Country</option>
                          <option>Pakistan</option>
                          <option>USA</option>
                          <option>Sri Lanka</option>
                          <option>Afghanistan</option>
                        </Input>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div class="form-group">
                        <Input
                          type="text"
                          name="lNmae"
                          placeholder="Zip Code"
                          class="form-control"
                        />
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col lg={4} md={4}>


            <div class="checkout_info">
                        <div class="cart_table_wraper">
                            <h4 class="xs-title">Order Summary</h4>
                            <table class="cart_table table">
                                <tbody>
                                    <tr class="cart-subtotal">
                                        <th><strong>Product</strong></th>
                                        <td>
                                            <strong>Quantity</strong>
                                        </td>
                                    </tr>
                                    <tr class="cart-subtotal">
                                        <th>Dedicated Hosting</th>
                                        <td>
                                            <span class="product-price">4</span>
                                        </td>
                                    </tr>
                                    <tr class="cart-subtotal">
                                        <th>Subtotal:</th>
                                        <td>
                                            <span class="product-price">$53.950</span>
                                        </td>
                                    </tr>
                                    <tr class="cart-fee">
                                        <th>Setup Fee:</th>
                                        <td>
                                            <span class="product-price">$0.00</span>    
                                        </td>
                                    </tr>
                                    <tr class="cart-fee">
                                        <th>Discount:</th>
                                        <td>
                                            <span class="product-price highlight">-$0.00</span>
                                        </td>
                                    </tr>
                                    <tr class="order-total">
                                        <th><strong>Total:</strong></th>
                                        <td>
                                            <span class="product-price"><strong>$53.95</strong></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="wc-proceed-to-checkout">
                            <div class="xs-btn-wraper">
                                <input type="submit" class="btn btn-primary" name="update_cart" value="Preceed to Checkout" />
                            </div>
                        </div>
                    </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Checkout;
