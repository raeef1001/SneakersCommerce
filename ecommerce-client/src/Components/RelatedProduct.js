import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const RelatedProduct = ({related}) => {
  const responsiveness = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    taqblet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel 
      responsive={responsiveness}
      containerClass="-mx-[10px]"
      itemClass="px-[10px]"
      >
       {
        related.map(r=><ProductCard data={r}></ProductCard>)
       }
      </Carousel>
      ;
    </div>
  );
};

export default RelatedProduct;
