import React,{Fragment} from 'react';
import {Container , Row , Col} from 'reactstrap';
import OurHistory from './our-history/OurHistory';
import OurVision from './our-vision/OurVision';
import OureTeam from './our-team/OurTeam';

const Aboutus = () => {
    return (
        <Fragment>
          <OurHistory />
          <OurVision />
          <OureTeam />
        </Fragment>
    )
}

export  default Aboutus;