import React , {Fragment} from 'react';
import {Container , Row , Col} from 'reactstrap';

 const BannerCompaign = () => {
    return (
        <Fragment>
                    <div class="xs-banner-campaign-v2">
                        <Container class="container">
                            <Row class="row">
                                <Col md ={7}>
                                    <a href="#" class="xs-banner-campaign">
                                        <img src= {require('../../../assets/images/banners/banner-campaign-3.png')} alt="Campaign Banner" />
                                    </a>
                                </Col>
                                <Col md={5}>
                                    <a href="#" class="xs-banner-campaign">
                                        <img src={require('../../../assets/images/banners/banner-campaign-4.png')}  alt="Campaign Banner" />
                                    </a>
                                </Col>
                            </Row>
                        
                        </Container>
                    
                    </div>
            
        </Fragment>
    )
}

export default BannerCompaign;