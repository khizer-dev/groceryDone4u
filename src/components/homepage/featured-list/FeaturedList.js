import React, {Fragment} from 'react';
import './FeaturedList.style.css';
import {
    Container ,
    Row ,
    Col
} from 'reactstrap';

 const FeaturedList = () => {
    return (
        <Fragment>
             <div class="xs-featureList-section">
                <Container >
                  <Row className="border">
                      <Col md={3} sm={12} xs={12}>
                            <div class="media xs-feature p-4 border-right ">
                                 <i class="fa fa-cart-plus d-flex mr-3 "></i>
                                  <div class=" xs-feature-text">
                                         <h4>Free Delivery</h4>
                                        <span>from $78</span>
                                    </div>
                            </div>
                      </Col>
                      <Col md={3} sm={12} xs={12}>
                        <div class="media xs-feature p-4 border-right ">
                                <i class="fa fa-users  d-flex mr-3"></i>
                                <div class="media-body xs-feature-text">
                                    <h4>99% Customer</h4>
                                     <span>feedbacks</span>
                                </div>
                            </div>
                     
                      </Col>
                      <Col md={3} sm={12} xs={12}>
                        <div class="media xs-feature p-4 border-right ">
                                    <i class="fa fa-undo  mr-3 align-self-center"></i>
                                    <div class="media-body xs-feature-text">
                                        <h4>10 Days</h4>
                                        <span>for free return</span>
                                    </div>
                        </div>
                      </Col>
                      <Col sm={3} xs={12}>
                        <div class="media xs-feature p-4 border-right ">
                                    <i class="fa fa-usd mr-3 align-self-center"></i>
                                    <div class="media-body xs-feature-text">
                                        <h4>Payment</h4>
                                        <span>secure system</span>
                                    </div>
                        </div>
                      </Col>
                     
                  </Row>
                </Container>
       
             </div>
        </Fragment>
    )
}

export default FeaturedList;


  {/* <Row> */}
                        {/* <Col>
                    <ul class="xs-feature-list">  
                    <Col md={2}>
                        <li>
                            <div class="media xs-feature">
                                <i class="fa fa-cart-plus "></i>
                                <div class=" xs-feature-text">
                                    <h4>Free Delivery</h4>
                                    <span>from $78</span>
                                </div>
                            </div>
                        
                        </li>
                    </Col>
                    
                    <Col md={2}>
                        <li>
                            <div class="media xs-feature">
                            
                                <i class="fa fa-users  mr-1 align-self-center"></i>
                                <div class="media-body xs-feature-text">
                                    <h4>99% Customer</h4>
                                    <span>feedbacks</span>
                                </div>
                            </div>
                        
                        </li>
                    </Col>
                    <Col md={4}>
                        <li>
                            <div class="media xs-feature">
                                <i class="fa fa-undo  mr-3 align-self-center"></i>
                                <div class="media-body xs-feature-text">
                                    <h4>10 Days</h4>
                                    <span>for free return</span>
                                </div>
                            </div>
                    
                        </li>
                        </Col>
                        <Col md={2}>
                        <li>
                            <div class="media xs-feature">
                                <i class="fa fa-usd mr-3 align-self-center"></i>
                                <div class="media-body xs-feature-text">
                                    <h4>Payment</h4>
                                    <span>secure system</span>
                                </div>
                            </div>
                        
                        </li>
                        </Col>
                        <Col md={2}>
                        <li>
                            <div class="media xs-feature">
                            
                                <i class="fa fa-info  mr-3 align-self-center"></i>
                                <div class="media-body xs-feature-text">
                                    <h4>24/7</h4>
                                    <span>online supports</span>
                                </div>
                            </div>
                        
                        </li>
                    
                    </Col>
                    </ul>
                    </Col>
                    </Row> */}