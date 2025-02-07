import React, { useContext, useState } from "react";
import logo from "../assets/frontend_assets/manya_logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "../pages/notify.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isPattuActive, setIsPattuActive] = useState(false);
  const [isBanarasiActive, setIsBanarasiActive] = useState(false);
  const [ishandLoomActive, setIshandLoomActive] = useState(false);

  const { setShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  const toggleCart = () => {
    navigate("/cart");
  };

  const handleUserClick = () => {
    if (token) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="relative navbar z-10">
      <div className="flex items-center justify-between py-5 px-6 sm:px-10 font-medium">
        <Link to="/">
          <img
            src={logo}
            className="w-20 h-auto bg-black shadow-md hover:scale-105 transition-transform"
            alt="Logo"
          />
        </Link>

        {/* Categories Dropdown */}
        <div
          className="group"
          onMouseEnter={() => {
            setIsActive(true);
            setIsPattuActive(true);
            setIsBanarasiActive(false);
          }}
          onMouseLeave={() => setIsActive(false)}
        >
          <button className="text-sm font-medium py-2 px-4 sm:mt-1 rounded text-white-700 size-15 sm:px-1">
            All CATEGORIES
          </button>
          <div
            className={`absolute mt-2 bg-white shadow-md drop-duwn rounded ${isActive ? "block" : "hidden"}`}
            style={{ zIndex: 1000 }}
          >
            <div className="dropdown-menus">

            
<button 
                className="block nav-link w-full text-left px-4 py-2 hover:bg-gray-200"
                onMouseEnter={() => {
                  setIsPattuActive(true);
                  setIsBanarasiActive(false);
                  setIshandLoomActive(false);
                }}
              >
                Pattu
              </button>
              <button 
                className="block nav-link w-full text-left px-4 py-2 hover:bg-gray-200"
                onMouseEnter={() => {
                  setIsBanarasiActive(true);
                  setIsPattuActive(false);
                  setIshandLoomActive(false);
                }}
              >
                Banarasi Sarees
              </button>
              <button 
                className="block nav-link w-full text-left px-4 py-2 hover:bg-gray-200"
                onMouseEnter={() => {
                  setIsBanarasiActive(false);
                  setIshandLoomActive(true);
                  setIsPattuActive(false);
                }}
              >
                Hand Loom
              </button>
              </div>
            <ul className="flex nav flex-col text-gray-500 hover:text-black">
              <div
                className="px-4 pattu py-2 tex-gray-500 hover:text-black relative"
                // onMouseEnter={() => {
                //   setIsPattuActive(true);
                //   setIsBanarasiActive(false);
                // }}
                // onMouseLeave={() => setIsPattuActive(false)}
              >
                

                {isPattuActive && (
                  <div className=" mt-2 bg-white" style={{ zIndex: 1000 }}>
                    <ul className="flex flex-wrap gap-4 text-gray-500">
                      {[
                        "Soft Pattu",
                        "Kanchi Soft",
                        "Kannchi Fancy Sarees",
                        "Kanchi Pattu",
                        "Soft Silk",
                        "Pure Kanjivaram",
                        "Narayanpet Silks",
                        "Kanchi Tissue",
                        "Pure Kanjivaram Meena",
                        "Copper Jari with Shiffan Sarees",
                        "Pure 24K Gold Zari Saree",
                        "Kupadam Sarees",
                        "Kalakshetra Pattu",
                        "Borderless Saree",
                        "Kathan Pattu",
                        "Pure Kanchi Pattu Ikkath Design",
                        "Kuttu Border Pattu",
                        "1Gm Zari Gold",
                      ].map((label, index) => (
                        <li key={index} className="px-4 py-2 hover:text-black w-32">
                          <NavLink to={`/${label.toLowerCase().replace(/ /g, "-")}`}>{label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div
                className="px-4 banarasi   py-2 tex-gray-500 hover:text-black relative"
                // onMouseEnter={() => {
                //   setIsBanarasiActive(true);
                //   setIsPattuActive(false);
                // }}
                // onMouseLeave={() => setIsBanarasiActive(false)}
              >
               
                {isBanarasiActive && (
                  <div className="mt-2 bg-white " style={{ zIndex: 1000 }}>
                    <ul className="flex flex-wrap gap-4 text-gray-500">
                      {[
                        "Soft Pattu",
                        "Kanchi Soft Silk",
                        "Kannchi Fancy Sarees",
                        "Kanchi Pattu",
                        "Soft Silk",
                        "Pure Kanjivaram",
                        "Narayanpet Silks",
                        "Kanchi Tissue",
                        "Pure Kanjivaram Meena",
                        "Copper Jari with Shiffan Sarees",
                        "Pure 24K Gold Zari Saree",
                        "Kupadam Sarees",
                        "Kalakshetra Pattu",
                        "Borderless Saree",
                        "Kathan Pattu",
                        "Pure Kanchi Pattu Ikkath Design",
                        "Kuttu Border Pattu",
                        "1Gm Zari Gold",
                      ].map((label, index) => (
                        <li key={index} className="px-4 py-2 hover:text-black w-32">
                          <NavLink to={`/${label.toLowerCase().replace(/ /g, "-")}`}>{label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div
                className="px-4 handloom   py-2 tex-gray-500 hover:text-black relative"
                // onMouseEnter={() => {
                //   setIsBanarasiActive(true);
                //   setIsPattuActive(false);
                // }}
                // onMouseLeave={() => setIsBanarasiActive(false)}
              >
               
                {ishandLoomActive && (
                  <div className="mt-2 bg-white " style={{ zIndex: 1000 }}>
                    <ul className="flex flex-wrap gap-4 text-gray-500">
                      {[
                        "Soft Pattu",
                        "Kanchi Soft Silk",
                        "Kannchi Fancy Sarees",
                        "Kanchi Pattu",
                        "Soft Silk",
                        "Pure Kanjivaram",
                        "Narayanpet Silks",
                        "Kanchi Tissue",
                        "Pure Kanjivaram Meena",
                        "Copper Jari with Shiffan Sarees",
                        "Pure 24K Gold Zari Saree",
                        "Kupadam Sarees",
                        "Kalakshetra Pattu",
                        "Borderless Saree",
                        "Kathan Pattu",
                        "Pure Kanchi Pattu Ikkath Design",
                        "Kuttu Border Pattu",
                        "1Gm Zari Gold",
                      ].map((label, index) => (
                        <li key={index} className="px-4 py-2 hover:text-black w-32">
                          <NavLink to={`/${label.toLowerCase().replace(/ /g, "-")}`}>{label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* {[
                { path: "/hand-loom", label: "Hand Loom" },
                { path: "/pettu-badi-saree", label: "Pettu Badi Sarees" },
                { path: "/organza-saree", label: "Organza Saree" },
                { path: "/chanderi-sarees", label: "Chanderi Sarees" },
                { path: "/kanchi-silk", label: "Kanchi Silk" },
                { path: "/semi-pattu", label: "Semi Pattu" },
                { path: "/fancy", label: "Fancy" },
              ].map(({ path, label }) => (
                <li key={path} className="px-4 py-2 text-gray-500 hover:text-black">
                  <NavLink to={path}>{label}</NavLink>
                </li>
              ))} */}
            </ul>
          </div>
        </div>

        {/* Main Navigation Links */}
        <ul className="hidden sm:flex gap-10 text-sm text-white-700">
          {[
            { path: "/", label: "HOME" },
            { path: "/puresilksaree", label: "PURE SILK SAREE" },
            { path: "/kurtis", label: "KURTIS" },
            { path: "/nightwear", label: "NIGHTWEAR" },
          ].map(({ path, label }) => (
            <NavLink key={path} to={path} className="flex flex-col items-center gap-1">
              <p>{label}</p>
              <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
            </NavLink>
          ))}
        </ul>

        {/* Icons Section */}
        <div className="flex items-center gap-4 bg-white search">
          <FontAwesomeIcon
            className="w-5 cursor-pointer h-10"
            icon={faMagnifyingGlass}
            onClick={() => setShowSearch(true)}
          />
          <div className="group relative">
            <FontAwesomeIcon
              className="h-5 cursor-pointer"
              icon={faUser}
              onClick={handleUserClick}
            />
            {token && (
              <div className="hidden group-hover:block absolute top-4 right-0 mt-2 bg-slate-100 dropdown-menu text-gray-500 rounded shadow-lg">
                <div className="flex flex-col gap-2 w-36 py-3 px-5">
                  <p className="cursor-pointer hover:text-black" onClick={() => navigate("/profile")}>
                    My Profile
                  </p>
                  <p className="cursor-pointer hover:text-black" onClick={() => navigate("/orders")}>
                    Orders
                  </p>
                  <p className="cursor-pointer hover:text-black" onClick={logout}>
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          <div onClick={toggleCart} className="relative bag">
            <FontAwesomeIcon className="h-5 cursor-pointer" icon={faBagShopping} />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]">
              {getCartCount}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex justify-around bg-black-200 py-2">
        {[
          { path: "/", label: "HOME" },
          { path: "/puresilksaree", label: "PURE SILK SAREE" },
          { path: "/kurtis", label: "KURTIS" },
          { path: "/nightwear", label: "NIGHTWEAR" },
        ].map(({ path, label }) => (
          <NavLink key={path} to={path} className="text-sm font-medium">
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;