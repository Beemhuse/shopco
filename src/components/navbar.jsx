import React from "react";
import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isDropdown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!isDropdown);
  };
  const list = [
    {
      title: "Shop",
      url: "/",
      isDropdown: [
        { title: "Categories", url: "categories" },
        { title: "Main", url: "categories" },
      ],
    },
    {
      title: "On Sale",
      url: "/on-sale",
      isDropdown: null,
    },
    {
      title: "New Arrivals",
      url: "/new-arrivals",
      isDropdown: null,
    },
    {
      title: "Brands",
      url: "/brands",
      isDropdown: null,
    },
  ];
  console.log(isDropdown);
  return (
    <nav className="w-full   bg-white shadow-md   ">
      {/* <div className="bg-black p-4 text-white  w-full flex justify-end ">
        <div className="w-[70%] flex justify-between px-4">
          <h3>Signup and get 20% off to your first order</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
            />
          </svg>
        </div>
      </div> */}
      <div className="flex relative items-center gap-6 px-6">
        <h3 className="text-5xl font-bold">SHOP.CO</h3>
        <div className="flex items-center gap-4">
          {list.map((link) => (
            <>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  isActive ? "text-black text-2xl" : "text-gray-400 text-2xl"
                }
              >
                {link.title}
              </NavLink>

              {link.isDropdown ? (
                <div onClick={handleDropDown}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                    />
                  </svg>
                </div>
              ) : null}
              {isDropdown && (
                <div className=" absolute top-15 bg-white shadow-2xl   text-red-500  ">
                  {link?.isDropdown?.map((item) => (
                    <p className="text-red-500">{item.title}</p>
                  ))}
                </div>
              )}
            </>
          ))}
          {/* 
                        {isDropdown && (
                <div className=" bg-black text-red-500  ">
                  {list?.map((item) => {
                    <p className="text-red-500">{item.title}</p>;
                  })}
                </div>
              )} */}
        </div>
      </div>
    </nav>
  );
}
