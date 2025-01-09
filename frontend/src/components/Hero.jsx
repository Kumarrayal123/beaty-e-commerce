
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import HeroImage from '../assets/frontend_assets/Hero_1.1.jpg';
import HeroImage1 from '../assets/frontend_assets/Hero_2.png';
import HeroImage2 from '../assets/frontend_assets/Hero-3.11.png';
import Puresilk from '../assets/frontend_assets/puresilk.jpg';
import kurtis from '../assets/frontend_assets/kurtis.png';
import pattu from '../assets/frontend_assets/pattu.png';
import HandLoom from '../assets/frontend_assets/Hand-loom.png';
import Benarasi from '../assets/frontend_assets/banarasi.png';
import chanderi from '../assets/frontend_assets/chanderi.png';
import kanchi from '../assets/frontend_assets/kanchi.png';

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleImageClick = (route) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <div>
      {/* Hero Carousel */}
      <div className="flex flex-col sm:flex-row border border-gray-400">
        <Carousel
          className="index"
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <img
              className="w-full h-6px object-cover"
              src={HeroImage}
              alt="Hero Image"
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover"
              src={HeroImage1}
              alt="Hero Image 1"
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover"
              src={HeroImage2}
              alt="Hero Image 2"
            />
          </div>
        </Carousel>
      </div>

      {/* Categories with Hover Effects */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-10">
        {[
          { src: Puresilk, label: 'PURE SILK', route: '/PureSilkSaree' },
          { src: kurtis, label: 'KURTIS', route: '/Kurtis' },
          { src: pattu, label: 'PATTU', route: '/Pattu' },
          { src: HandLoom, label: 'HAND LOOM', route: '/HandLoom' },
          { src: Benarasi, label: 'BANARASI', route: '/Banarasi' },
          { src: chanderi, label: 'CHANDERI', route: '/Chanderi' },
          { src: kanchi, label: 'KANCHI', route: '/Kanchi' },
        ].map((item, index) => (
          <div key={index} className="text-center group">
            {/* Circular Image with Hover Effect */}
            <div
              className="w-20 h-20 group-item md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden border-2 border-gray-300 transform transition-transform duration-300 group-hover:scale-105 group-hover:border-gray-500"
              onClick={() => handleImageClick(item.route)} // Navigate on click
              style={{ cursor: 'pointer' }} // Add pointer cursor
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
              />
              
            </div>
            <p className="mt-2 group-text text-sm md:text-base font-semibold  transition-colors duration-300">
              {item.label}
            </p>
            {/* Label with Hover Effect */}
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
