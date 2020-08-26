import React,{Fragment} from 'react';
import MainBanner from './banner/MainBanner';
import FeaturedList from './featured-list/FeaturedList';
import BannerCompaign from './banner-compaign/BannerCompaign';
import Gadget from './gadget/Gadget';
import CombineGadget from './combine-gadget/CombineGadget';
import GadgetHorizontal from './gadget-with-horizontalcard/HorizontalGadget';
import MultiVerticalGadget from './multiverticalgadget/MultiVerticalGadget';
import HorImages from './horizontal-images/HorizontalImages'




 const Homepage = () => {
    return (
        <Fragment>
            <MainBanner />
            <FeaturedList />
            <BannerCompaign />
            <Gadget col={3} />
            <MainBanner fluid={true}/>
            <CombineGadget  />
            <GadgetHorizontal />
            <MultiVerticalGadget />
            <HorImages />
        </Fragment>
    )
}

export default Homepage;