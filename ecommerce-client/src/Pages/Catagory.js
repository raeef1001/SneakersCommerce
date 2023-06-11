import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import { useParams } from "react-router-dom";
const Catagory = () => {
    const routeParams = useParams();
    var catagory = routeParams.id
    const [fakescat,setFakescat]=useState([])
    const [callercat,setcallercat]=useState(true)
    useEffect(()=>
     {
  
      fetch(`http://localhost:4545/catagory/${catagory}`)
      .then(res=>res.json())
      .then(data=>{
          var fnew=[data]
          setFakescat(fnew[0])
          console.log("showing fakes")
          console.log(fakescat)
          if (fakescat.length<=0) {
            setcallercat(!callercat)
          }
      })
    },[callercat,catagory])

    return (
        <div className='w-full md:py-20 -z-50'>
            <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
                <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0 '>
                    <div className='text-[28px] md:text-[34px] mb-5 font-semibold'>
                    Running Shoes
                    </div>
                   
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                {fakescat.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>

            </div>
            
        </div>
    );
};

export default Catagory;