
import React from 'react';
// import logo from '../assets/frontend_assets/logo.png';
import logo from '../assets/frontend_assets/manya_logo.png';
import { Link } from 'react-router-dom';
import insta from '../assets/frontend_assets/instagram_icon.png';
import whatsapp from '../assets/frontend_assets/whatsapp_icon.png';
import twitter from '../assets/frontend_assets/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 px-5">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-10 px-5">
        {/* Logo and Description */}
        <div>
          <img src={logo} className="w-20 h-auto rounded-lg bg-black shadow-md hover:scale-105 transition-transform" alt="Company Logo" />
          <p className="text-gray-600 text-sm">
            Beauty creams nourish and hydrate the skin, promoting a radiant and healthy appearance.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link to="/Collection" className="hover:text-gray-900">Collection</Link></li>
            <li><Link to="/SilkSaree" className="hover:text-gray-900">SilkSaree</Link></li>
            <li><Link to="/BestSelling" className="hover:text-gray-900">BestSelling</Link></li>
          </ul>
        </div>


        

        {/* Get in Touch */}
        <div>
          <p className="text-lg font-medium mb-5">GET IN TOUCH</p>
          <ul className="text-gray-600">
            <li className="mb-1">+91 86888 60223</li>
            <li className="mb-1">manyacollections@gmail.com</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <p className="text-lg font-medium mb-5">FOLLOW US</p>
          <div className="flex gap-5">
            <img src={insta} className="w-7 h-7 hover:opacity-80" alt="Instagram" />
            <img src={whatsapp} className="w-7 h-7 hover:opacity-80" alt="WhatsApp" />
            <img src={twitter} className="w-7 h-7 hover:opacity-80" alt="Twitter" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10">
        <p className="py-5 text-center text-gray-600 text-xs">
          © 2024 The Patterns Company - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
