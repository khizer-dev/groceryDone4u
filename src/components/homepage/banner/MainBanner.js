import React, { Fragment, useState } from "react";
import "../../../components/homepage/banner/MainBanner.style.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
} from "reactstrap";

const items = [
  {
    src: "../../../assets/images/banners/banner-campaign-1.png",
    altText: "The Gift They Are Wishing for is right here",
    caption: "Get -50% Off",
  },
  {
    src: "../../../assets/images/banners/banner-campaign-1.png",
    altText: "The gift they are Wishing for is right here",
    caption: "Get -50% Off",
  },
  {
    src: "../../../assets/images/banners/banner-campaign-1.png",
    altText: "The gift they are Wishing for is right here",
    caption: "Get -50% Off",
  },
];

const MainBanner = (props) => {
  let fluidTemp = props.fluid;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src + 1}
      >
        <div className={fluidTemp ? "container-fluid bg-primary mt-4" : "container"}>
          <Row className="p-2">
            <Col className="xs-banner-content ">
              <h2 class="xs-banner-sub-title text-left font-weight-light">
                {item.caption}
              </h2>
              <h3 class="xs-banner-title text-left font-weight-light">
                {item.altText}
              </h3>
              <div className="xs-btn-wraper float-left">
                <a href="#" className="btn btn-outline-primary">
                  VIEW COLLECTIONS
                </a>
              </div>
            </Col>
            <Col className="text-right mobile-hide">
              <img
                src={require("../../../assets/images/welcome/head_phone_1.png")}
                alt={item.altText}
              />
            </Col>
          </Row>
        </div>
      </CarouselItem>
    );
  });

  console.log("fluiddd " + fluidTemp);
  return (
    <Fragment>
      <div classNameName="xs-banner">
        <div className={fluidTemp ? "container-fluid" : "container"}>
          <Row>
            <Col>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default MainBanner;
