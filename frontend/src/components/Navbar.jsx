


// import React, { useContext, useState } from "react";
// import logo from '../assets/frontend_assets/logo.png';
// import search from '../assets/frontend_assets/search_icon.png';
// import user from '../assets/frontend_assets/profile_icon.png';
// import bag from '../assets/frontend_assets/cart_icon.png';
// import menu from '../assets/frontend_assets/menu_icon.png';
// import { Link, NavLink } from 'react-router-dom';
// import { ShopContext } from "../context/ShopContext";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const { setShowSearch, getCartCount,navigate,token,setToken, setCartItems } = useContext(ShopContext);

//   const logout = () =>{
//     navigate('/login')
//     localStorage.removeItem('token')
//     setToken('')
//     setCartItems({})

    
//   }

//   const handleNavLinkClick = () => {
//     setVisible(false); // Close the mobile menu when a link is clicked
//   };

//   return (
//     <div className="flex items-center justify-between py-5 px-10 font-medium">
//       <Link to={'/'}>
//         <img src={logo} className="w-36" alt="Logo" />
//       </Link>

//       <ul className="hidden sm:flex gap-10 text-sm text-gray-700">
//         <NavLink to='/' className='flex flex-col item-center gap-1'>
//           <p>HOME</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to='/Collection' className='flex flex-col item-center gap-1'>
//           <p>COLLECTION</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to='/SilkSaree' className='flex flex-col item-center gap-1'>
//           <p>SILK SAREE</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to='/BestSelling' className='flex flex-col item-center gap-1'>
//           <p>BEST SELLING</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//       </ul>

//       <div className="flex items-center gap-6">
//         <img onClick={() => setShowSearch(true)} src={search} className="w-5 cursor-pointer" alt="Search Icon" />

//         <div className="group relative">
//          <img onClick={()=>token ? null : navigate('login')} src={user} className="w-5 cursor-pointer" alt="User Icon" />
//           {token && 
//           <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
//             <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
//               <p className="cursor-pointer hover:text-black">My Profile</p>
//               <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
//               <p  onClick={logout}  className="cursor-pointer hover:text-black">Logout</p>
//             </div>
//           </div>}
//         </div>

//         <Link to='/Cart' className="relative">
//           <img src={bag} className="w-5 cursor-pointer" alt="Cart Icon" />
         
//           <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
//             {getCartCount}
//           </p>
//         </Link>

//         <img onClick={() => setVisible(true)} src={menu} className="w-5 cursor-pointer sm:hidden" alt="Menu Icon" />
//       </div>

//       {/* Side Menu */}
//       <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//         <div className="flex flex-col text-gray-600">
//           <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
//             <img className="h-4 rotate-180" src={menu} alt="Back" />
//             <p>Back</p>
//           </div>
//           {/* Update NavLinks to include click handler */}
//           {[{ path: '/', label: 'Home' }, { path: '/Collection', label: 'COLLECTION' }, { path: '/About', label: 'ABOUT' }, { path: '/Contact', label: 'CONTACT' }].map(({ path, label }) => (
//             <NavLink key={path} to={path} onClick={handleNavLinkClick} className='py-2 pl-6 border'>
//               {label}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useContext, useState } from "react";
import logo from '../assets/frontend_assets/manya_logo.png';
import search from '../assets/frontend_assets/search_icon.png';
 import user from '../assets/frontend_assets/profile_icon.png';
import bag from '../assets/frontend_assets/cart_icon.png';
import menu from '../assets/frontend_assets/menu_icon.png';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from "../context/ShopContext";
// import AccountCircleIcon from '../assets/frontend_assets/assets';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faBagShopping } from '@fortawesome/free-solid-svg-icons';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import "../pages/notify.css"
import Title from './Title';



const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  const handleNavLinkClick = () => {
    setVisible(false); // Close the mobile menu when a link is clicked
  };
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the active state
  const toggleCart = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="relative navbar ">
      {/* Main Navbar */}
      <div className="flex items-center justify-between py-5 px-6 sm:px-10 font-medium ">
        <Link to={'/'}>
          {/* <img src={logo} className="w-20 bg-black" alt="Logo" /> */}
          <img 
        src={logo} 
        className="w-20 h-auto bg-black shadow-md hover:scale-105 transition-transform"
        alt="Logo" 
      />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-10 text-sm text-white-700">
          {[
            { path: '/', label: 'HOME' },
            { path: '/Collection', label: 'COLLECTION' },
            { path: '/SilkSaree', label: 'SILK SAREE' },
            { path: '/BestSelling', label: 'BEST SELLING' },
          ].map(({ path, label }) => (
            <NavLink key={path} to={path} className="flex flex-col items-center gap-1">
              <p>{label}</p>
              <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
            </NavLink>
          ))}
        </ul>

        {/* Icons Section */}
        <div className="flex items-center gap-4 bg-white  search">
          {/* <img
            onClick={() => setShowSearch(true)}
            
            
            className="w-5 cursor-pointer"
            alt="Search Icon"
          /> */}
<FontAwesomeIcon className="w-5 cursor-pointer h-10" icon={faMagnifyingGlass} onClick={() => setShowSearch(true)} />

          <div className="group relative user">
            {/* <img
              onClick={() => (token ? null : navigate('login'))}
              src={user}
              className="w-5 cursor-pointer"
              alt="User Icon"
            /> */}
            <FontAwesomeIcon className="h-5" icon={faUser} />
            {/* <AccountCircleIcon className="w-5 cursor-pointer" onClick={() => (token ? null : navigate('login'))} /> */}
            {token && (
              <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
                    Orders
                  </p>
                  <p onClick={logout} className="cursor-pointer hover:text-black">
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          <div onClick={toggleCart} className="relative bag">
            {/* <img src={bag} className="w-5 cursor-pointer" alt="Cart Icon" /> */}
            <FontAwesomeIcon className="h-5" icon={faBagShopping} />
            
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]">
              {getCartCount}
            </p>
          </div>

          {/* Mobile Menu Icon */}
          {/* <img
            onClick={() => setVisible(!visible)}
            src={menu}
            className="w-5 cursor-pointer sm:hidden"
            alt="Menu Icon"
          /> */}
          <FontAwesomeIcon className="w-5 cursor-pointer sm:hidden h-5" icon={faBars} onClick={() => setVisible(!visible)} />
        </div>
      </div>

      {/* Side Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 bg-white transition-transform transform ${
          visible ? 'translate-x-0' : 'translate-x-full'
        } w-4/5 sm:w-1/3 shadow-lg`}
      >
        <div className="flex flex-col h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer text-gray-600"
          >
            <img className="h-4 rotate-180" src={menu} alt="Close" />
            <p>Close</p>
          </div>
          {[
            { path: '/', label: 'HOME' },
            { path: '/Collection', label: 'COLLECTION' },
            { path: '/SilkSaree', label: 'SILK SAREE' },
            { path: '/BestSelling', label: 'BEST SELLING' },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={handleNavLinkClick}
              className="py-3 px-6 text-gray-700 border-b hover:bg-gray-100"
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Background overlay for mobile menu */}
      {visible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={() => setVisible(false)}
        ></div>
      )}



     
      <div className={`cart-notify ${isActive ? "active" : ""}`}>
       <div>
       <Title text2="SHOPING CART" />
       </div>




        <h2>Your Cart</h2>
        <p>Items in your cart will appear here.</p>
        <button onClick={toggleCart} className="close-cart">
          x
        </button>
      </div>
 
    </div>
    
  );
};

export default Navbar;
