import React, {Fragment} from 'react';
import {Col } from 'reactstrap';

 const TeamCard = () => {
    return (
        <Fragment>
            <Col lg={3} md={4} sm={6} xs={6}>
                <div class="xs-single-team">
                    <div class="team-thumb">
                        <img src={require("../../../../../assets/images/team/team_1.png")} alt="" />
                        <div class="xs-overlay bg-black"></div>
                        <div class="team-hover-content">
                            <ul class="xs-social-list">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3 class="team-designation">FOUNDER</h3>
                        <h4 class="team-name"><a href="#">Tony Williamson</a></h4>
                    </div>
                </div>
            </Col>
            
        </Fragment>
    )
}

export default TeamCard;