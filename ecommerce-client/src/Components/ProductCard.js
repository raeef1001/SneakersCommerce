import React from 'react';
import { Link } from 'react-router-dom';
import sampleImage from'../assets/product-1.webp'
const ProductCard = ({data}) => {
    const {_id,name,desc,desctwo,subtitle,price,discount,discountedPrice,size,disabledSize,catagory,Image,allImages} =data;
 
    return (
        <Link
        to={`/singleproduct/${_id}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer "
        >
            <img src={Image} alt={name} className='w-full' />
            {/* <Image
                width={500}
                height={500}
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
            /> */}

   
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                       ${discountedPrice}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                             {discount}% off
                            </p>
                
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;