import React, {Fragment} from 'react';
import {
    Container ,
    Row ,
    Col
} from 'reactstrap';

 const FeaturedList = () => {
    return (
        <Fragment>
             <div class="xs-featureList-section">
                <Container class="container">
                    <ul class="xs-feature-list">
                        <li>
                            <div class="media xs-feature">
                          
                                <i class="fa fa-cart-plus d-flex mr-3 align-self-center"></i>
                                <div class="media-body xs-feature-text">
                                    <h4>Free Delivery</h4>
                                    <span>from $78</span>
                                </div>
                            </div>
                        
                        </li>
                    
                        <li>
                            <div class="media xs-feature">
                            
                                <i class="fa fa-users d-flex mr-3 align-self-center"></i>
                                <div class="media-body xs-feature-text">
                                    <h4>99% Customer</h4>
                                    <span>feedbacks</span>
                                </div>
                            </div>
                        
                        </li>
                    
                        <li>
                            <div class="media xs-feature">
                           
                                <i class="fa fa-undo d-flex mr-3 align-self-center"></i>
                                <div class="media-body xs-feature-text">
                                    <h4>10 Days</h4>
                                    <span>for free return</span>
                                </div>
                            </div>
                    
                        </li>
                        
                        <li>
                            <div class="media xs-feature">
                            
                                <i class="fa fa-usd d-flex mr-3 align-self-center"></i>
                                <div class="media-body xs-feature-text">
                                    <h4>Payment</h4>
                                    <span>secure system</span>
                                </div>
                            </div>
                        
                        </li>
                    
                        <li>
                            <div class="media xs-feature">
                            
                                <i class="fa fa-info d-flex mr-3 align-self-center"></i>
                                <div class="media-body xs-feature-text">
                                    <h4>24/7</h4>
                                    <span>online supports</span>
                                </div>
                            </div>
                        
                        </li>
                    
                    </ul>
                </Container>
       
             </div>
        </Fragment>
    )
}

export default FeaturedList;