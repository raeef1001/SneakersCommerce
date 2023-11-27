import React from 'react';
import ProductCard from '../Components/ProductCard';
import { Link } from 'react-router-dom';
const Wishlist = ({wishItems,setLovedItems}) => {
    const from = "wishlist";    
    return (
        <div className='w-full md:py-20 z-50'>
            <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
               {wishItems.length > 0 && (
                <div>
                     <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0 '>
                 <div className='text-[28px] md:text-[34px] mb-5 font-semibold'>
                 Wishlist
                 </div>
                
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
             {wishItems.map((product) => (
                     <ProductCard key={product.id} data={product} from={from} wishItems={wishItems} setLovedItems={setLovedItems}/>
                 ))}
             </div>
                </div>
               )}
                {/* This is empty screen */}

        {wishItems.length == 0 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <img
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
              alt=''
            />
            <span className="text-xl font-bold">Your Wishlist is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your wishlist.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              to="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
            
          </div>
        )}

            </div>
            
        </div>
    );
};

export default Wishlist;