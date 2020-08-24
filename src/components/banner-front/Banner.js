import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

export const Banner = () => {
  return (
    <Fragment>
      <div class="xs-banner">
        <Container>
          <div
            class="xs-banner-slider-3 owl-carousel"
            style="background-image:url('assets/images/backgrounds/banner_bg_3.png')"
          ></div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Banner;
