import React, { Fragment } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";

const ProductCardHorizontal = (props) => {
  return (
    <Fragment>
      <Col lg={ props.col ? props.col : "4"  } md={6} className="mb-5">
        <div className="xs-product-widget media">
          <img
            className="d-flex"
            src={require("../../assets/images/350x144/product_1_350x144.jpg")}
            alt="Mobile"
          />
          <div className="media-body padding product-widget-content">
            <div className="xs-product-header media">
              <span className="star-rating d-flex"></span>
              <a href="#" className="add_to_wishlist media-body">
                <i className="fa fa-heart"></i>
              </a>
            </div>

            <h4 className="product-title">
              <a href="product-details.html">Amgrest Wifi Remote Camera</a>
            </h4>
            <span className="price">
              $250.00
              <del>$275.00</del>
            </span>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default ProductCardHorizontal;
