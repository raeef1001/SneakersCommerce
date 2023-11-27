import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
const ProductCard = ({ data, from, wishItems, setLovedItems }) => {
  const {
    _id,
    name,
    desc,
    desctwo,
    subtitle,
    price,
    discount,
    discountedPrice,
    size,
    disabledSize,
    catagory,
    Image,
    allImages,
  } = data;
  const deleteItem = () => {
    const newWish = wishItems.filter((item) => item._id !== _id);
    localStorage.setItem("mywish", JSON.stringify(newWish));
    setLovedItems(newWish);
  };
  return (
    <Link
      to={`/singleproduct/${_id}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer "
    >
      <img src={Image} alt={name} className="w-full" />
  
     {
        from === "wishlist" && (
          <div
            className="absolute top-0 right-0 w-8 h-8 rounded-full flex justify-center
                 items-center hover:bg-black/[0.05] curson-pointer"
            onClick={deleteItem}
          >
            <RiDeleteBinLine className="w-5 h-5 text-black/[0.5]" />
          </div>
        )
     }

      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">${discountedPrice}</p>
          <p className="ml-auto text-base font-medium text-green-500">
            {discount}% off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
