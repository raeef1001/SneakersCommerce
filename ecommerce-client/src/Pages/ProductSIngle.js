import React, { useEffect, useState } from "react";
import ProductDetailsCarousel from "../Components/ProductDetailsCarousel";
import {IoMdHeartEmpty} from 'react-icons/io'
import RelatedProduct from "../Components/RelatedProduct";
import { Link, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductSIngle = ({cartItems,setCartItems,wishItems,setLovedItems,related}) => {
    const routeParams = useParams();
    var productid = routeParams.id
    console.log(productid);
 async function fetchdata(){
    console.log("start fetching")
    await fetch(`https://sneakersserver.onrender.com/singleproduct/${productid}`)
     .then(res=>res.json())
     .then(data=>{
         var fnew=data
         setproductDetails(fnew)
         console.log("showing fakes")
         console.log(productDetails)
         if (productDetails.length<=0) {
           setcallersingle(!callersingle)
         }
     }) }

    
    const [productDetails,setproductDetails]=useState({
        name:'',
        allImages:[],
        subtitle:'',
        desc:'',
        desctwo:'',
        size:[],
        disabledSize:[],
        _id:'',


    })
    const [callersingle,setcallersingle]=useState(true)
    useEffect(()=>
     {
        
  
     fetchdata()
     
    },[callersingle,productid])


    const [selectedSize,setSelectedSize] = useState(0)
    const [NoSize,setNoSize] = useState(true)
    const [cartClicked,setCartClicked] = useState(false)
    const notify =()=>{
        toast.success('Success Check Your Cart', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            price: '',
            discountedPrice: '',
            discount:''
            });
    }
    return (
        <div className="w-full md:py-20">
            <ToastContainer/>
            <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left section  */}

                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel image={productDetails.allImages}></ProductDetailsCarousel>
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
                       <span className="line-through text-black/[0.5]">{`$${productDetails.price}`}  </span>
                            <span className="text-xl ml-2 text-green-500">{productDetails.discountedPrice}</span>
                       </div>
                       <div>
                       <span className="text-sm ml-2 text-green-500 ">{productDetails.discount+"% discount"}</span>
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
                                <div className="cursor-pointer text-md font-medium text-black/[0.5]">Select Guide</div>
                            </div>
                            {/* size box  */}

                           <div className="grid grid-cols-3 gap-2">

                                {
                                    productDetails.size.map(s=>  <button
                                        className={`border rounded-md text-center py-3 font-medium hover:border-black curson-pointer
                                        ${(s===selectedSize)&&"border-black"}
                                        `}
                                    
                                    onClick={()=>{
                                        setSelectedSize(s)
                                        setNoSize(false)
                                        console.log(selectedSize)
                                        productDetails.selectedSize=s
                                        }}>
                                    {s}
                                </button>)
                                } 
                                 {
                                    productDetails.disabledSize.map(ds=> <div className="border rounded-md text-center py-3 font-medium opacity-50 bg-black/[0.1] curson-not-allowed ">
                                   {ds}
                                </div>)
                                } 
                         
                               
                              
                              

                           </div>
                           {
                            (NoSize&&cartClicked)&& <div className="text-red-600 mt-1">
                            Size selection is required
                        </div>
                           }

                         
                        
                        </div>
                        <button onClick={()=>{
                            setCartClicked(true)
                            const func=(car) => {
                                console.log('check')
                                if(car._id==productDetails._id){
                                    car.quantity=((car.quantity)+1)
                                    console.log("this is called ")
                                }
                                else{
                                    let tempcart=[...cartItems,productDetails]
                                    setCartItems(tempcart)
                                    console.log("this is called ")
                                   
                                
                                }
                                  
                            }
                            cartItems.forEach(func)
                                
                            let tempcart=[...cartItems,productDetails]
                            setCartItems(tempcart)
                         
                            !NoSize&&notify()
                        }} className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3">
                            Add to Cart
                        </button>
                        <button onClick={()=>{
                            let tempwish=[...wishItems,productDetails]
                            setLovedItems(tempwish)
                        } }className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="text-md mb-5">
                               {productDetails.desc}
                            </div>
                            <div className="text-md mb-5">
                               {productDetails.desctwo}
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProduct related={related}></RelatedProduct>
            </div>
        </div>
    );
};

export default ProductSIngle;
