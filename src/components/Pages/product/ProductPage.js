import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductDetails from "./product-details/ProductDetails";

const ProductPage = () => {
  return (
    <Fragment>
      <Container>
        <ProductDetails />
      </Container>
    </Fragment>
  );
};

export default ProductPage;
