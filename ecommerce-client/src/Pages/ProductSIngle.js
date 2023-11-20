import React, { useEffect, useState } from "react";
import ProductDetailsCarousel from "../Components/ProductDetailsCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProduct from "../Components/RelatedProduct";
import { Link, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductSIngle = ({
  cartItems,
  setCartItems,
  wishItems,
  setLovedItems,
  related,
}) => {
  const routeParams = useParams();
  var productid = routeParams.id;
  console.log(productid);

  async function fetchdata() {
    console.log("start fetching");
    await fetch(`http://localhost:4545/singleproduct/${productid}`)
      .then((res) => res.json())
      .then((data) => {
        var item = data;
        var total_quant = Object.values(item.size_quant).reduce(
          (sum, value) => sum + parseInt(value),
          0
        );
        var disabled = Object.keys(item.size_quant).filter(
          (key) => parseInt(item.size_quant[key]) === 0
        );
        var available_Size = Object.keys(item.size_quant).filter(
          (key) => parseInt(item.size_quant[key]) !== 0
        );

        item = {
          _id: item._id,
          name: item.name,
          subtitle: item.subtitle,
          Image: item.Image,
          allImages: item.allImages,
          desc: item.desc,
          desctwo: item.desctwo,
          price: item.price,
          discount: item.discount,
          discountedPrice: item.discountedPrice,
          catagory: item.catagory,
          selected_Size: 0,
          selected_quantity: 0,
          total_price: 0,
          total_quantity: total_quant,
          all_size: available_Size,
          disabled_size: disabled,
          size_quant: item.size_quant,
        };

        setproductDetails(item);
        console.log(item);
        console.log("showing fakes");
        console.log(productDetails);
        if (productDetails.length <= 0) {
          setcallersingle(!callersingle);
        }
      });
  }

  const [productDetails, setproductDetails] = useState({
    name: "",
    allImages: [],
    subtitle: "",
    desc: "",
    desctwo: "",
    all_size: [],
    disabled_size: [],
    _id: "",
  });
  const [callersingle, setcallersingle] = useState(true);
  useEffect(() => {
    fetchdata();
  }, [callersingle, productid]);

  const [selectedSize, setSelectedSize] = useState(0);
  const [NoSize, setNoSize] = useState(true);
  const [cartClicked, setCartClicked] = useState(false);
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
  const notify_already_selected = () => {
    toast.success("Already added to cart", {
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
  const notifyWish = () => {
    toast.success("Added to wishlist", {
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
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left section  */}

          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel
              image={productDetails.allImages}
            ></ProductDetailsCarousel>
          </div>

          {/* right section  */}
          <div className="py-3 flex-[1]">
            <div className="text-[34px] font-semibold mb-2">
              {productDetails.name}
            </div>
            <div className="text-lg font-semibold mb-5">
              {productDetails.subtitle}
            </div>
            <div className="flex flex-row justify-between items-baseline">
              <div className="text-lg font-semibold mb-5 ">
                <span className="line-through text-black/[0.5]">
                  {`$${productDetails.price}`}{" "}
                </span>
                <span className="text-xl ml-2 text-green-500">
                  {productDetails.discountedPrice}
                </span>
              </div>
              <div>
                <span className="text-sm ml-2 text-green-500 ">
                  {productDetails.discount + "% discount"}
                </span>
              </div>
            </div>
            <div className="text-md  font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* size selection  */}

            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="cursor-pointer text-md font-medium text-black/[0.5]">
                  Select Guide
                </div>
              </div>
              {/* size box  */}

              <div className="grid grid-cols-3 gap-2">
                {productDetails.all_size.map((s) => (
                  <button
                    className={`border rounded-md text-center py-3 font-medium hover:border-black curson-pointer
                                        ${s === selectedSize && "border-black"}
                                        `}
                    onClick={() => {
                      setSelectedSize(s);
                      setNoSize(false);
                      console.log(s);
                    }}
                  >
                    {s}
                  </button>
                ))}
                {productDetails.disabled_size.map((ds) => (
                  <div className="border rounded-md text-center py-3 font-medium opacity-50 bg-black/[0.1] curson-not-allowed ">
                    {ds}
                  </div>
                ))}
              </div>
              {NoSize && cartClicked && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
            </div>
            <button
              onClick={() => {
                setCartClicked(true);
               if(!NoSize){
                console.log("this is called 11 ");
                console.log(cartItems.length);
                if (cartItems.length == 0) {
                  console.log("this is called 22");
                  setCartClicked(true);
                  productDetails.selected_quantity =
                    productDetails.selected_quantity + 1;
                  productDetails.total_price =
                    productDetails.selected_quantity *
                    productDetails.discountedPrice;
                  productDetails.selected_Size = selectedSize;
                  let tempcart = [...cartItems, productDetails];
                  localStorage.setItem('mycart', JSON.stringify(tempcart));
                  setCartItems(tempcart);
                  !NoSize && notify();
                } else {
                  let foundObject = cartItems.find(
                    (obj) => obj._id === productDetails._id
                  );

                  if (foundObject) {
                    !NoSize && notify_already_selected();
                  } else {
                    setCartClicked(true);
                    productDetails.selected_quantity =
                      productDetails.selected_quantity + 1;
                    productDetails.total_price =
                      productDetails.selected_quantity *
                      productDetails.discountedPrice;
                    productDetails.selected_Size = selectedSize;
                    let tempcart = [...cartItems, productDetails];
                    localStorage.setItem('mycart', JSON.stringify(tempcart));
                    setCartItems(tempcart);
                    !NoSize && notify();
                  }
                }
               }
            
              }}
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
  
                if (wishItems.length == 0) {
                    let tempwish = [...wishItems, productDetails];
                    localStorage.setItem('mywish', JSON.stringify(tempwish));
                    setLovedItems(tempwish);
                     notifyWish();
                } else {
                  let foundObject = wishItems.find(
                    (obj) => obj._id === productDetails._id
                  );

                  if (foundObject) {
                     notifyWish();
                  } else {
                    let tempwish = [...wishItems, productDetails];
                    localStorage.setItem('mywish', JSON.stringify(tempwish));
                    setLovedItems(tempwish);
                     notifyWish();
                  }
                }
              
              }}
              className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
            >
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">{productDetails.desc}</div>
              <div className="text-md mb-5">{productDetails.desctwo}</div>
            </div>
          </div>
        </div>
        <RelatedProduct related={related}></RelatedProduct>
      </div>
    </div>
  );
};

export default ProductSIngle;
