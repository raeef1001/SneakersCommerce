import React from 'react';
import ProductCard from '../Components/ProductCard';
const Wishlist = ({wishItems}) => {
    return (
        <div className='w-full md:py-20 -z-50'>
            <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
                <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0 '>
                    <div className='text-[28px] md:text-[34px] mb-5 font-semibold'>
                    Wishlist
                    </div>
                   
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                {wishItems.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>

            </div>
            
        </div>
    );
};

export default Wishlist;