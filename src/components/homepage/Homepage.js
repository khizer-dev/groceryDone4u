import React,{Fragment} from 'react';
import MainBanner from './banner/MainBanner';
import FeaturedList from './featured-list/FeaturedList';
import BannerCompaign from './banner-compaign/BannerCompaign';




 const Homepage = () => {
    return (
        <Fragment>
            <MainBanner />
            <FeaturedList />
            <BannerCompaign />
        </Fragment>
    )
}

export default Homepage;