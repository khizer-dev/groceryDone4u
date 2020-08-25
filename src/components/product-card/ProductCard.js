import React, { Fragment } from "react";
import { Col } from "reactstrap";

const ProductCard = (props) => {
  return (
    <Fragment>
      <Col lg={ props.col ? props.col : "3"  } md={6}>
        <div class="xs-product-wraper version-3 text-center">
          <img
            src={require( "../../assets/images/253x200/product_1_253x200.jpg")}
            alt="Lamp"
          />
          <ul class="product-item-meta">
            <li>
              <a href="#" class="ajax_add_to_cart">
              <i class="fa fa-shopping-cart"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="modal"
                data-target=".xs-quick-view-modal"
              >
                <i class="fa fa-eye"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-heart"></i>
              </a>
            </li>
           
          </ul>
          <div class="xs-product-content">
            <span class="product-categories">
              <a href="#" rel="tag">
                Accessories
              </a>
            </span>
            <h4 class="product-title">
              <a href="product-details.html">Wireless Speaker</a>
            </h4>
            <span class="price">
              $450.00
              <del>$575.00</del>
            </span>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};
export default ProductCard;
