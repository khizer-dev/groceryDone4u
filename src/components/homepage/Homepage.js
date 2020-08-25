import React,{Fragment} from 'react';
import MainBanner from './banner/MainBanner';
import FeaturedList from './featured-list/FeaturedList';
import BannerCompaign from './banner-compaign/BannerCompaign';
import Gadget from './gadget/Gadget';
import CombineGadget from './combine-gadget/CombineGadget';




 const Homepage = () => {
    return (
        <Fragment>
            <MainBanner />
            <FeaturedList />
            <BannerCompaign />
            <Gadget />
            <MainBanner fluid={true}/>
            <CombineGadget />
        </Fragment>
    )
}

export default Homepage;