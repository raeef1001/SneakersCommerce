import React from 'react';
import HeroBanner from './HeroBanner';
import ProductCard from './ProductCard';
import fakedata from '../Fakedata'
import { useContext } from 'react';
import { Context } from '../App';
const Home = () => {
    const fakes = useContext(Context);
    return (
        <div>
            <HeroBanner></HeroBanner>
            {/* heading and paragraph  */}

            <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
               {/* heading and paragaph start */}
               <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {fakes.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))} 
                  
                </div>
                {/* products grid end */}
            </div>
        </div>
    );
};

export default Home;