

import React, { useContext, useState } from "react";
import logo from "../assets/frontend_assets/manya_logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { ShopContext } from "../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "../pages/notify.css";


const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [isActive, setIsActive] = useState(false);
  const [isPattuActive, setIsPattuActive] = useState(false); // State for handling the hover effect of "Pattu"

  const {
    setShowSearch,
    getCartCount,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  const toggleCart = () => {
    navigate("/cart"); // Navigate to cart page when clicked
  };

  const handleUserClick = () => {
    if (token) {
      navigate("/profile"); // Navigate to profile page if logged in
    } else {
      navigate("/login"); // Navigate to login page if not logged in
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


        <div
          className=" group"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <button className="text-sm font-medium py-2 px-4 sm:mt-1 rounded text-white-700 size-15 sm:px-1">
            All CATEGORIES
          </button>
          <div
            className={`absolute  mt-2 bg-white shadow-md   drop-duwn rounded  ${isActive ? "block" : "hidden"
              }`}
            style={{ zIndex: 1000 }}
          >
            <ul className="flex nav flex-col text-gray-500  hover:text-black ">
              {[{ path: "", label: "Pattu" }].map(({ path, label }) => (
                <li
                  key={path}
                  className="px-4 nav-link py-2 tex-gray-500 hover:text-black  relative"
                  onMouseEnter={() => setIsPattuActive(true)}
                  onMouseLeave={() => setIsPattuActive(false)}
                >
                  <NavLink to={path}>{label}</NavLink>

                </li>
              ))}

              <ul className="flex flex-wrap gap-4 text-gray-500">
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/soft-pattu">Soft Pattu</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/kanchi-soft">kanchi soft</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/kanchi-fancy">Kannchi Fancy Sarees</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/semi-pattu">Kanchi Pattu</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Soft Silk</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Pure Kanjivaram</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Narayanpet Silks</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Kanchi Tissue</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Pure Kanjivaram Meena</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Copper Jari with Shiffan Sarees</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Pure 24K Gold Zari Saree</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Kupadam Sarees</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Kalakshetra Pattu</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Borderless saree</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Kathan Pattu</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Pure Kanchi Pattu Ikkath Design
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Kuttu Border Pattu
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">1Gm Zari Gold

                  </NavLink>
                </li>
              </ul>
              {[{ path: "", label: "Banarasi Sarees" }].map(({ path, label }) => (
                <li
                  key={path}
                  className="px-4 nav-link py-2 tex-gray-500 hover:text-black  relative"
                  onMouseEnter={() => setIsPattuActive(true)}
                  onMouseLeave={() => setIsPattuActive(false)}
                >
                  <NavLink to={path}>{label}</NavLink>

                </li>
              ))}
              <ul className="flex flex-wrap gap-4 text-gray-500">
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/soft-pattu">Soft Pattu</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/kanchi-pattu">Kanchi Soft Silk</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/konchi-pattu">Kannchi Fancy Sarees</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/semi-pattu">Kanchi Pattu</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Soft Silk</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Pure Kanjivaram</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Narayanpet Silks</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Kanchi Tissue</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Pure Kanjivaram Meena</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Copper Jari with Shiffan Sarees</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Pure 24K Gold Zari Saree</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Kupadam Sarees</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Kalakshetra Pattu</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Borderless saree</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Kathan Pattu</NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Pure Kanchi Pattu Ikkath Design
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">Kuttu Border Pattu
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:text-black w-32">
                  <NavLink to="/fancy-pattu">1Gm Zari Gold

                  </NavLink>
                </li>
              </ul>

              {[
                // { path: "/banarasi-sarees", label: "Banarasi Sarees" },

                { path: "/Hand-Loom", label: "Hand Loom" },
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
              ))}
            </ul>

          </div>
        </div>




        <ul className="hidden sm:flex gap-10 text-sm text-white-700">
          {[{ path: "/", label: "HOME" },
          //  { path: "/Collection", label: "COLLECTION" },
          { path: "/puresilksaree", label: "PURE SILK SAREE" },
          { path: "/kurtis", label: "KURTIS" },
          { path: "/nightwear", label: "NIGHTWEAR" },
          ]
            .map(({ path, label }) => (
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
          <div className="group relative ">
            <FontAwesomeIcon
              className="h-5 cursor-pointer"
              icon={faUser}
              onClick={() => !token && navigate("login")} // Navigate to login or profile on user icon click
            />

            {token && (
              <div className="hidden group-hover:block absolute top-4 right-0 mt-2 bg-slate-100 dropdown-menu text-gray-500 rounded shadow-lg">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 ">
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
            <FontAwesomeIcon className="h-5 cursor-pointer" icon={faBagShopping} onClick={toggleCart} />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]">
              {getCartCount}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex justify-around bg-black-200 py-2">
        {[{ path: "/", label: "HOME" },
        //  { path: "/Collection", label: "COLLECTION" }, 
        { path: "/puresilksaree", label: "PURE SILK SAREE" },
        { path: "/kurtis", label: "KURTIS" },
        { path: "/nightWear", label: "NIGHTWEAR" },
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


