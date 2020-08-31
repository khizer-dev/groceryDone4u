import React, { Fragment, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Card,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import "./Cart.style.css";
import QuantityButton from "../../Pages/product/product-details/quantity-button/QuantityButton";

const Cart = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <Card className="mt-5">
              <Table borderless responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="mt-4">
                    <th className="padding-top">2</th>
                    <th>
                      <img
                        src={require("../../../assets/images/350x144/product_4_350x144.jpg")}
                        alt="product"
                      />
                    </th>
                    <th className="padding-top">Plastic Kit</th>
                    <th className="padding-top">$250</th>
                    <th className="padding-top">
                      {" "}
                      <QuantityButton />{" "}
                    </th>
                    <th className="padding-top">$500</th>
                  </tr>
                  <tr className="mt-4">
                    <th className="padding-top">1</th>
                    <th>
                      <img
                        src={require("../../../assets/images/350x144/product_4_350x144.jpg")}
                        alt="product"
                      />
                    </th>
                    <th className="padding-top">Plastic Kit</th>
                    <th className="padding-top">$250</th>
                    <th className="padding-top">
                      {" "}
                      <QuantityButton />{" "}
                    </th>
                    <th className="padding-top">$500</th>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div className="mt-4">
              <h2>Cart Totals</h2>
            </div>
            <Card className="mt-2">
              <Table>
                <tbody>
                  <tr class="cart-subtotal">
                    <th className="pt-4">Subtotal</th>
                    <td data-title="Subtotal">
                      <span class="woocommerce-Price-amount amount">
                        <span class="woocommerce-Price-currencySymbol">$</span>
                        320.00
                      </span>
                    </td>
                  </tr>
                  <tr class="shipping">
                    <th className="pt-4">Shipping</th>
                    <td data-title="Shipping">Free shipping</td>
                  </tr>
                  <tr class="order-total">
                    <th className="pt-4">Total</th>
                    <td data-title="Total">
                      <strong>
                        <span class="woocommerce-Price-amount amount">
                          <span class="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          320.00
                        </span>
                      </strong>{" "}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>

            <Button color="primary" className="mt-3 width-100">Proceed to check out</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Cart;
