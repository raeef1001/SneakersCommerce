import React, { useEffect, useState } from "react";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
import FormCheckout from "../Components/FormCheckout";
import { useContext } from "react";
import { Context } from "../App";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = ({ cartItems, setCartItems }) => {
  const [fakes,userDetails,openModal,setOpenModal,setUser] = useContext(Context);
  // const [quant,setQuant] =useState([])
  const [price_changed, setPrice_changed] = useState(true);
  const [totalprice, settotalPrice] = useState(0);
  const [order, setOrder] = useState([]);
  const [orderSent, sentOrderSent] = useState(false);
  async function sendOrderData() {
    try {
      const response = await fetch('http://localhost:4545/addOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers as needed
        },
        body: JSON.stringify(order),
      })
   
        if (response.ok) {
          // var tempCart=[];
        //  await setCartItems(tempCart);
          // Successful submission logic
          console.log('Data successfully submitted to the backend!');
          sentOrderSent(false)
          notify();
  
        } else {
          // Handle errors from the backend
          console.error('Error submitting data to the backend');
        }
     
    } catch (error) {
      // Handle fetch errors
      console.error('Error:', error);
    }
  }
  const handleOrder = () =>{
  const orderList = {
     product_id: cartItems,
     user_id: userDetails.uid,   
  }
    setOrder(orderList);
    // sentOrderSent(true);
    sendOrderData();
    sentOrderSent(true);

      
  

}


  useEffect(() => {
    var total = cartItems.reduce((sum, c) => sum + parseInt(c.total_price), 0);
    settotalPrice(total);
    console.log(cartItems);
  }, [cartItems, price_changed]);
  // useEffect(()=>{
  //     var total = quant.reduce((sum,c)=>sum+c,0)
  //     settotalPrice(total)
  // },[quant])
  const notify = () => {
    toast.success("Success Check Your Cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      price: "",
      discountedPrice: "",
      discount: "",
    });
  };
  return (
    <div className="w-full md:py-20">
       <ToastContainer />
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        {cartItems.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Checkout
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">Selected Items</div>
                {cartItems.map((cr) => (
                  <Checkout_cart
                    d={cr}
                    total_cart={cartItems}
                    setPrice_changed={setPrice_changed}
                    price_changed={price_changed}
                  ></Checkout_cart>
                ))}
                 <div className="mt-24">
                <FormCheckout />
              </div>
              </div>

              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="text-sm md:text-md py-5 border-b mt-5">
                    {cartItems.map((d) => {
                      return (
                        <div className="flex justify-between">
                          <div className=" text-sm md:text-md font-medium text-black">
                            {d.name} * {d.selected_quantity}
                          </div>
                          <div className="text-sm md:text-md font-medium text-black">
                            ${d.total_price}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-5">
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
                  </div>
                </div>
                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between mt-5">
                    <div className=" text-md md:text-lg font-medium text-black">
                      Delivery Location
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      ${totalprice}
                    </div>
                  </div>
                  <div className="flex justify-between mt-5">
                    <div className="text-md md:text-lg font-medium text-black">
                      Delivery Date
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      ${totalprice}
                    </div>
                  </div>
                </div>

                <button disabled={!sentOrderSent}
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  onClick={handleOrder}
                >
                  {sentOrderSent?"Order Now":"Sending"}

                  {/* // {loading && <img src="/spinner.svg" />}  */}
                </button>
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

export default Checkout;

// checkout_cart

const Checkout_cart = ({ d, total_cart, setPrice_changed, price_changed }) => {
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

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size: {d.selected_Size}</div>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">
                Quantity: {d.selected_quantity}
              </div>
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
