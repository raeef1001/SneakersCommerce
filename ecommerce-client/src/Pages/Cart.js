import React, { useEffect, useState } from "react";
import CartItem from "../Components/CartItem";
import { Link, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../App';
import Login from "./Login";
const Cart = ({ cartItems, setCartItems,signIn}) => {
    const [fakes,userDetails,openModal,setOpenModal] = useContext(Context);
  // const [quant,setQuant] =useState([])
  const [price_changed, setPrice_changed] = useState(true);
  const [totalprice, settotalPrice] = useState(0);
  useEffect(() => {
    var total = cartItems.reduce((sum, c) => sum + parseInt(c.total_price), 0);
    settotalPrice(total);
    console.log(cartItems);
  }, [cartItems, price_changed]);
  // useEffect(()=>{
  //     var total = quant.reduce((sum,c)=>sum+c,0)
  //     settotalPrice(total)
  // },[quant])


  const navigate = useNavigate();
  const handleClick = () => {
    // Use history.push to navigate to the specified route
    navigate('../checkout');
  };
  return (
    <div className="w-full md:py-20">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        {cartItems.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((cr) => (
                  <CartItem
                    d={cr}
                    total_cart={cartItems}
                    set_the_cart={setCartItems}
                    setPrice_changed={setPrice_changed}
                    price_changed={price_changed}
                  ></CartItem>
                ))}
              </div>

              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      ${totalprice}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                </div>

                <div>
                  <button
                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                    onClick={userDetails.isSignedIn?()=>handleClick():()=>setOpenModal(true)}

                    // onClick={handlePayment}
                  >
                    Checkout
                    {/* // {loading && <img src="/spinner.svg" />}  */}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* This is empty screen */}

        {cartItems.length == 0 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <img
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
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
      </div>{" "}
    </div>
  );
};

export default Cart;
