import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
const CartItem = ({
  d,
  total_cart,
  set_the_cart,
  setPrice_changed,
  price_changed,
}) => {

    const deleteItem = () => {
        const newCart = total_cart.filter((item) => item._id !== d._id);
        localStorage.setItem('mycart', JSON.stringify(newCart));
        set_the_cart(newCart);
    }

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
        <img src={d.Image} className="w-[300px" alt="" />
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
            {/* {p.subtitle} */} {d.subtitle}
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

        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
              <div className="flex items-center gap-1">
                <div className="font-semibold">Size:</div>
                <select
                  className="hover:text-black"
                  onChange={(e) => {
                    const foundObject = total_cart.find(
                      (obj) => obj._id === d._id
                    );
                    if (foundObject) {
                      foundObject.selected_Size = e.target.value;
                    } else {
                      console.log("Object not found with id:");
                    }

                    set_the_cart(total_cart);
                    console.log(total_cart);
                  }}
                >
                  {d.all_size.map((item, i) => {
                    return (
                      <option
                        key={i}
                        value={item}
                        selected={d.selected_Size === item}
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
                  onChange={(e) => {
                    const foundObject = total_cart.find(
                      (obj) => obj._id === d._id
                    );
                    if (foundObject) {
                      foundObject.selected_quantity = e.target.value;
                      foundObject.total_price =
                        foundObject.selected_quantity *
                        foundObject.discountedPrice;
                      console.log("Object modified:", foundObject);
                    } else {
                      console.log("Object not found with id:");
                    }

                    set_the_cart(total_cart);
                    setPrice_changed(!price_changed);
                    console.log(total_cart);
                  }}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                    return (
                      <option
                        key={i}
                        value={q}
                        selected={parseInt(d.selected_quantity) === q}
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
          <div
            onClick={deleteItem}
            className="w-10 h-10 hover:bg-gray-300 hover:rounded-full "
          >
            <RiDeleteBinLine className="w-5 h-5 mx-auto my-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
