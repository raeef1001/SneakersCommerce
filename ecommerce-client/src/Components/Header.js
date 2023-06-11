import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu";

// icons

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";

const Header = ({ cartItems, wishItems }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);


  // useEffect(() => {
  //   random();
  // }, []);
  // const random = async () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => setCatagories(json));
  // };

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
          <img src={logo} alt="sdkfh" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
        
        ></Menu>
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
  
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
