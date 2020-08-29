import React,{Fragment} from 'react';
import {Container , Row , Col} from 'reactstrap';

const TermsCondition = () => {
    return (
        <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col>
                    <div className="terms-list-group">
                    <div className="terms-list media">
                        <i className="fa fa-play d-flex"></i>
                        <div className="media-body">
                            <b>Types of Personal Information We Collect</b>
                            <p>Personal Information is information that can be used to identify, locate, or contact an individual.It also includes other information that may be associated with Personal Information. We collect the following types of Personal Information:</p>
                            <p><b>Contact Information</b> that allows us to communicate with you, such as your name, postal addresses, email addresses, social media website user account names, telephone numbers, or other addresses at which you receive communications from or on behalf of marketpress.</p>
                            <p><b>Transaction Information</b> about how you purchase and redeem</p>
                            <p><b>Financial Account Information</b> as needed to process payments for marketpress.com that you buy, such as your credit or debit card number, expiration date.</p>
                        </div>
                    </div>
                    <div className="terms-list media">
                        <i className="fa fa-play d-flex"></i>
                        <div className="media-body">
                            <b>How marketpress.com Collects Personal Information</b>
                            <p>We ask you for Personal Information when you register, subscribe, create an account, order a deal, or otherwise interact with the Sites or contact.</p>
                        </div>
                    </div>
                    <div className="terms-list media">
                        <i className="fa fa-play d-flex"></i>
                        <div className="media-body">
                            <b>How marketpress.com Uses Personal Information</b>
                            <p>You may correct your information by signing in your account. Or you may also email to info@example.com. If you want to close your account or have other questions or requests, please contact us: +8 0 11 223 456</p>
                        </div>
                    </div>
                </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default TermsCondition
