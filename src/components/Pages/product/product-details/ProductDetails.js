import React, { Fragment, useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import SliderWithThumbnail from "./slider-with-thumbnail/SliderWithThumbnail";
import ProductTab from "./product-tabs/ProductTab";
import "./ProductDetails.style.css";
import ProductCard from "../../../product-card/ProductCard";
import HorizontalImages from "../../../homepage/horizontal-images/HorizontalImages";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const onDeduct = () => {
    if (quantity > 1) {
      setQuantity((quantity) => --quantity);
    }
    console.log("quantity: ", quantity);
  };

  const onIncrease = () => {
    setQuantity((quantity) => ++quantity);
    console.log("quantity: ", quantity);
  };

  const onChangeHandler = (e) => setQuantity(e.target.value);

  return (
    <Fragment>
      <div className="xs-section-padding xs-product-details-section">
        <Container>
          <Row>
            <Col lg={6}>
              <SliderWithThumbnail />
            </Col>
            <Col lg={6}>
              <div className="summary-content single-product-summary">
                <h3 className="entry-title">Hitech Innovations</h3>
                <h4 className="product-title">
                  Apple 27-inch iMac with Retina 5K display: 3.4GHz quad-core
                  Intel Core i5 (MNE92PA/A)
                </h4>
                <span className="star-rating color-green">
                  <span className="value">(200 Customers review)</span>
                </span>
                <ul className="xs-list check">
                  <li>Backlight: LED</li>
                  <li>1200 watts peak</li>
                  <li>Multimedia Speakers</li>
                  <li>Front-facing subwoofer</li>
                  <li>Refresh Rate: 120Hz (Effective)</li>
                  <li>Powerful High Resulation Retina Display</li>
                  <li>
                    Dimensions (W x H x D): TV without stand: 43.5″ x 25.4″ x
                    3.0″.
                  </li>
                </ul>
                <span className="price highlight">
                  <del>$590.00</del>
                  $370.00
                </span>
                <Row className="xs-add-to-chart-form">
                  <Col md={8}>
                    <div>
                      <div className="xs_input_number quantity max-width-50 full-height">
                        <InputGroup>
                          <InputGroupAddon
                            addonType="prepend"
                            onClick={onDeduct}
                          >
                            <InputGroupText>-</InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="number"
                            value={quantity}
                            name={quantity}
                          />
                          <InputGroupAddon
                            addonType="prepend"
                            onClick={onIncrease}
                          >
                            <InputGroupText>+</InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                      <div className="w-quantity-btn">
                        <button
                          type="submit"
                          className="single_add_to_cart_button btn btn-primary"
                        >
                          Add To Cart
                        </button>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </Col>
                  <Col md={2}>
                    <a href="#" className="xs-wishlist-and-compare">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </a>
                  </Col>
                  <Col md={2}>
                    <a href="#" className="xs-wishlist-and-compare">
                      <i
                        className="icon icon-shuffle-arrow"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <ProductTab />
          </Row>
          <Row>
            <ProductCard col={4} />
            <ProductCard col={4} />
            <ProductCard col={4} />
          </Row>
          <Row>
              <HorizontalImages/>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
