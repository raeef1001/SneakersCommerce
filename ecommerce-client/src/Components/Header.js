import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu";

// icons

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { FaUser } from "react-icons/fa";
import Login from "../Pages/Login";
import { useContext } from 'react';
import { Context } from '../App';
const Header = ({ cartItems, wishItems,categories ,signIn,signout}) => {
  const [fakes,userDetails] = useContext(Context);
  console.log(userDetails);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [profile,setProfile] = useState(false);
  let partName;
  if (userDetails.isSignedIn) {
     partName = userDetails.userName.split(" ");
    partName= partName[partName.length-1];
  }
  const profileRef = useRef(null);
  useEffect(()=>{
    let handle = (e)=>{
      if(profileRef.current &&!profileRef.current.contains(e.target)){
        setProfile(false)
      }
    }
    document.addEventListener("mousedown",handle)
    return ()=>{
      document.removeEventListener("mousedown",handle)
    }

  },[profile])
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.screenY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 top-0 transition-trasnform duration-300 ${show}`}
    >
      <div
        className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto h-[60px] flex justify-between items-center`}
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu className="z-210"
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        
        ></Menu>
        {mobileMenu && (
          <MenuMobile className="z-210"
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
  
          ></MenuMobile>
        )}

        {/* right side icons starts  */}
        <div className="icon flex items-center gap-2 text-black">
            <Link to='/wishlist'>
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
                 items-center hover:bg-black/[0.05] curson-pointer relative "
          >
            <IoMdHeartEmpty className="text-[15px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 btext-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              {wishItems.length}
            </div>
          </div>
          </Link>

          <Link to="/cart">
            <div
              className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
                 items-center hover:bg-black/[0.05] curson-pointer relative "
            >
              <BsCart className="text-[15px] md:text-[19px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 btext-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {cartItems.length}
              </div>
            </div>
          </Link>
          {userDetails.isSignedIn?( <div ref={profileRef}
            // onClick={() => setProfile(!profile)}
            onClick={() => setProfile(!profile)}
          >
             {profile && (
          <div  className="absolute md:top-20 top-12 md:-translate-x-10 -translate-x-20  md:w-[200px] w-[160px] h-[200px] bg-white z-50 b-2 rounded-md">
            <div className="w-full h-full border-2 border-gray-100 rounded-md p-4">
              <Link to='/cart'><h1 className="p-1 m-1 hover:bg-black/[0.05] hover:rounded-md curson-pointer border-b-2 border-gray-200">Cart</h1></Link>
              <Link to='/wishlist'><h1 className="curson-pointer border-b-2 border-gray-200 p-1 m-1 hover:rounded-md  hover:bg-black/[0.05] curson-pointer">Wishlist</h1></Link>
              <div onClick={signout}><h1 className="cursor-pointer w-full p-1 m-1 hover:bg-black/[0.05] hover:rounded-md curson-pointer border-b-2 border-gray-200">signout</h1></div>
              <div className="flex gap-2 content-center items-center mt-2 mb-2">
              <img className="rounded-full h-10" src={userDetails.UserImage} alt="" />
              <h1 className="">{partName}</h1>
              
              {/* <h2>{userDetails.UserEmail}</h2> */}
              
        </div>
        
            </div>
          </div>
          
        )}

            <div
              className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
                 items-center hover:bg-black/[0.05] curson-pointer relative "
            >
              <FaUser className="text-[15px] md:text-[19px]" />
             
            </div>
          </div>):( <Login signIn={signIn}></Login>)}
         

          {/* mobile icon starts */}
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center
                 items-center hover:bg-black/[0.05] curson-pointer relative -mr-2 "
          >
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[16px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
