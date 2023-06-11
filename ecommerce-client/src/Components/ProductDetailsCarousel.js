import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

const ProductDetailsCarousel = ({image}) => {
    return (
        <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] '>

            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                autoPlay={true}
                className='productCarousel'
            >
                {
                    image.map(i=><img src={i} alt="" />)
                }
                
               
                
                
                </Carousel>    
        </div>
    );
};

export default ProductDetailsCarousel;