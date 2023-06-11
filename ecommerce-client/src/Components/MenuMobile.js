import React from "react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];
const catagories = [
  { id: 1, name: "Jordan", url: "catagory/Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", url: "catagory/Sneakers", doc_count: 8 },
  {
    id: 3,
    name: "Running shoes",
    url: "catagory/runningShoes",
    doc_count: 64,
  },
  {
    id: 4,
    name: "Football shoes",
    url: "catagory/footballShoes",
    doc_count: 107,
  },
]


const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {

  return (
    <div>
      <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t  text-black">
        {data.map((item) => (
          <React.Fragment key={item.key}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col"
                onClick={()=>setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                 
                  {item.name}
                  <BsChevronDown size={14} />
                </div>
                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4 ">
                    {catagories?.map((sub) => (
                      <Link
                        key={sub.id}
                        to="/"
                        onClick={() => {
                          setShowCatMenu(false);
                          setMobileMenu(false);
                        }}
                      >
                        <li className="py-4 px-8 border-t flex justify-between">
                          {sub.name}
                          <span className="opacity-50 text-sm">
                            {sub.doc_count}
                          </span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link to={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile;
