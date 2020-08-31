import React,{Fragment} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SliderWithThumbnail = () => {
    return (
        <Fragment>
            <div>
                <h2>My Image Gallery</h2>
                <Carousel autoPlay interval="5000" transitionTime="800">
                    <div>
                        <img src="https://picsum.photos/700/400?img=1" />
                        <p className="legend">My Classic Still 1</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=2" />
                        <p className="legend">My Classic Still 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=3" />
                        <p className="legend">My Classic Still 3</p>
                    </div>
                </Carousel>
            </div>
            
        </Fragment>
    )
}

export default SliderWithThumbnail;
