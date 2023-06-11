import React, { useState } from 'react';

const CartItem = ({d,setQuant,quant}) => {

    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            {/* IMAGE START */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                {/* <Image
                    src={p.thumbnail.data.attributes.url}
                    alt={p.name}
                    width={120}
                    height={120}
                /> */}
                <img src={d.Image} className='w-[300px' alt="" />
            </div>
            {/* IMAGE END */}

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* PRODUCT TITLE */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        {/* {p.name} */} {d.name}
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        {/* {p.subtitle} */}  {d.subtitle}
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        MRP : ${d.discountedPrice}
                    </div>
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                   {d.subtitle}
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            <select
                                 className="hover:text-black"
                                  onChange={(e) =>
                               //     updateCartItem(e, "selectedSize")
                               console.log(e)
                                 }
                            >
                                  {d.size.map((item, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={item}
                            
                                            selected={
                                                d.selectedSize === item
                                            }
                                        >
                                            {item}
                                        </option>
                                    );
                                })} 
                            </select>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                           <select
                                className="hover:text-black"
                                 onChange={(e)=>setQuant([...quant,e.target.value*d.discountedPrice])}
                            >
                                {Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            selected={d.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                                })}
                            </select> 
                        </div>
                    </div>
                   {/* <RiDeleteBin6Line
                        onClick={() =>
                            dispatch(removeFromCart({ id: data.id }))
                        }
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default CartItem;