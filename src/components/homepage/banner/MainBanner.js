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
    altText: "The gift they are Wishing for is right here",
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
const MainBanner = () => {
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
      
        key={item.src+1}
      >
        <Container>
          <Row className="p-2">
            <Col className="xs-banner-content">
              <h2 class="xs-banner-sub-title text-left font-weight-light">{item.caption}</h2>
              <h3 class="xs-banner-title text-left font-weight-light">{item.altText}</h3>
              <div className="xs-btn-wraper float-left">
                <a href="#" className="btn btn-outline-primary">
                  VIEW COLLECTIONS
                </a>
              </div>
            </Col>
            <Col className="text-right ">
              <img
                src={require("../../../assets/images/welcome/head_phone_1.png")}
                alt={item.altText}
              />
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <Fragment>
      <div classNameName="xs-banner">
        <Container>
          <Row>
            {/* <div className="xs-banner-item row"> */}
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

            {/* <div className="col-lg-7">
                                <div className="xs-banner-content content-right">
                                    <h2 className="xs-banner-sub-title animInLeft">Get -50% Off</h2>
                                    <h3 className="xs-banner-title animInLeft">The gift they are Wishing for is right here</h3>
                                    <div className="xs-btn-wraper">
                                        <a href="#" className="btn btn-outline-primary animInLeft">VIEW COLLECTIONS</a>
                                    </div>
                                </div>
                        
                            </div>
                            <div className="col-lg-5">
                                <div className="xs-banner-image animInRight">
                                    <img src="../../../assets/images/welcome/head_phone_1.png" alt="head phone" />
                                </div>
                            
                            </div> */}
            {/* </div> */}

            {/* <div className="xs-banner-item row">
                            <div className="col-lg-7 ">
                                <div className="xs-banner-content content-right">
                                    <h2 className="xs-banner-sub-title animInLeft">Get -70% Off</h2>
                                    <h3 className="xs-banner-title animInLeft">The gift they are Wishing for is right here</h3>
                                    <div className="xs-btn-wraper">
                                        <a href="#" className="btn btn-outline-primary animInLeft">VIEW COLLECTIONS</a>
                                    </div>
                                </div>
                        
                            </div>
                            <div className="col-lg-5">
                                <div className="xs-banner-image animInRight">
                                    <img src="../../../assets/images/welcome/headphone_2.png" alt="head phone" />
                                </div>
                        
                            </div>
                        </div> */}

            {/* <div className="xs-banner-item row">
                            <div className="col-lg-7">
                                <div className="xs-banner-content content-right">
                                    <h2 className="xs-banner-sub-title animInLeft">Get -60% Off</h2>
                                    <h3 className="xs-banner-title animInLeft">The gift they are Wishing for is right here</h3>
                                    <div className="xs-btn-wraper">
                                        <a href="#" className="btn btn-outline-primary animInLeft">VIEW COLLECTIONS</a>
                                    </div>
                                </div>
                        
                            </div>
                            <div className="col-lg-5">
                                <div className="xs-banner-image animInRight">
                                    <img src="../../../assets/images/welcome/headphone_3.png" alt="head phone" />
                                </div>
                        
                            </div>
                        </div> */}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default MainBanner;
