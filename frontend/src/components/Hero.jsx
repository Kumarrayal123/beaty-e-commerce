
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
// import Heroimage from '../assets/frontend_assets/Hero_1.1.png'
// import HeroImage1 from '../assets/frontend_assets/Hero_2.png';
// import HeroImage2 from '../assets/frontend_assets/Heroimage2.2.png';
// import Puresilk from '../assets/frontend_assets/puresilk.jpg';
// import kurtis from '../assets/frontend_assets/kurtis.png';
// import pattu from '../assets/frontend_assets/pattu.png';
// import HandLoom from '../assets/frontend_assets/Hand-loom.png';
// import Benarasi from '../assets/frontend_assets/banarasi.png';
// import chanderi from '../assets/frontend_assets/chanderi.png';
// import kanchi from '../assets/frontend_assets/kanchi.png';

// const Hero = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const handleImageClick = (route) => {
//     navigate(route); // Navigate to the specified route
//   };

//   return (
//     <div>
//       {/* Hero Carousel */}
//       <div className="flex flex-col sm:flex-row border-gray-400">
//         <Carousel
//           className="index"
//           showThumbs={false}
//           infiniteLoop={true}
//           autoPlay={true}
//           interval={3000}
//         >
//           <div>
//             <img
//               className="w-full h-6px object-cover"
//               src={Heroimage}
//               alt="Hero Image"
//             />
//           </div>
//           <div>
//             <img
//               className="w-full h-full object-cover"
//               src={HeroImage1}
//               alt="Hero Image 1"
//             />
//           </div>
//           <div>
//             <img
//               className="w-full h-full object-cover"
//               src={HeroImage2}
//               alt="Hero Image 2"
//             />
//           </div>
//         </Carousel>
//       </div>

//       {/* Categories with Hover Effects */}
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-10">
//         {[
//           { src: Puresilk, label: 'PURE SILK', route: '/PureSilkSaree' },
//           { src: kurtis, label: 'KURTIS', route: '/Kurtis' },
//           { src: pattu, label: 'PATTU', route: '/Pattu' },
//           { src: HandLoom, label: 'HAND LOOM', route: '/HandLoom' },
//           { src: Benarasi, label: 'BANARASI', route: '/Banarasi' },
//           { src: chanderi, label: 'CHANDERI', route: '/Chanderi' },
//           { src: kanchi, label: 'KANCHI', route: '/Kanchi' },
//         ].map((item, index) => (
//           <div key={index} className="text-center group">
//             {/* Circular Image with Hover Effect */}
//             <div
//               className="w-20 h-20 group-item md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden border-2 border-gray-300 transform transition-transform duration-300 group-hover:scale-105 group-hover:border-gray-500"
//               onClick={() => handleImageClick(item.route)} // Navigate on click
//               style={{ cursor: 'pointer' }} // Add pointer cursor
//             >
//               <img
//                 src={item.src}
//                 alt={item.label}
//                 className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
//               />
              
//             </div>
//             <p className="mt-2 group-text text-sm md:text-base font-semibold  transition-colors duration-300">
//               {item.label}
//             </p>
//             {/* Label with Hover Effect */}
           
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// // Importing assets
// import Heroimage from '../assets/frontend_assets/Hero_1.1.png';
// import HeroImage1 from '../assets/frontend_assets/Hero_2.png';
// import HeroImage2 from '../assets/frontend_assets/Heroimage2.2.png';
// import Puresilk from '../assets/frontend_assets/puresilk.jpg';
// import Kurtis from '../assets/frontend_assets/kurtis.png';
// import Pattu from '../assets/frontend_assets/pattu.png';
// import HandLoom from '../assets/frontend_assets/Hand-loom.png';
// import Benarasi from '../assets/frontend_assets/banarasi.png';
// import Chanderi from '../assets/frontend_assets/chanderi.png';
// import Kanchi from '../assets/frontend_assets/kanchi.png';

// const Hero = () => {
//   const navigate = useNavigate();

//   // Handle navigation to specific routes
//   const handleImageClick = (route) => {
//     navigate(route);
//   };

//   // Categories data
//   const categories = [
//     { src: Puresilk, label: 'Pure Silk', route: '/PureSilkSaree' },
//     { src: Kurtis, label: 'Kurtis', route: '/Kurtis' },
//     { src: Pattu, label: 'Pattu', route: '/Pattu' },
//     { src: HandLoom, label: 'Hand Loom', route: '/HandLoom' },
//     { src: Benarasi, label: 'Banarasi', route: '/Banarasi' },
//     { src: Chanderi, label: 'Chanderi', route: '/Chanderi' },
//     { src: Kanchi, label: 'Kanchi', route: '/Kanchi' },
//   ];

//   return (
//     <div className="hero-container">
//       {/* Hero Carousel */}
//       <div className="carousel-container mb-10">
//         <Carousel
//           showThumbs={false}
//           infiniteLoop
//           autoPlay
//           interval={3000}
//           className="carousel"
//         >
//           {[Heroimage, HeroImage1, HeroImage2].map((image, index) => (
//             <div key={index}>
//               <img
//                 src={image}
//                 alt={`Hero Slide ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* Categories Section */}
//       <div className="categories-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="category-item text-center group"
//             onClick={() => handleImageClick(item.route)}
//             style={{ cursor: 'pointer' }}
//           >
//             {/* Circular Image */}
//             <div
//               className="image-wrapper w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden border-2 border-gray-300 group-hover:border-gray-500 transform transition-transform duration-300 group-hover:scale-105"
//             >
//               <img
//                 src={item.src}
//                 alt={item.label}
//                 className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
//               />
//             </div>

//             {/* Category Label */}
//             <p className="mt-3 text-sm md:text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
//               {item.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';


// Importing assets
import Heroimage from '../assets/frontend_assets/Hero_1.1.png';
import HeroImage1 from '../assets/frontend_assets/Hero_2.png';
import HeroImage2 from '../assets/frontend_assets/Heroimage2.2.png';
import Puresilk from '../assets/frontend_assets/puresilk.jpg';
import Kurtis from '../assets/frontend_assets/kurtis.png';
import Pattu from '../assets/frontend_assets/pattu.png';
import HandLoom from '../assets/frontend_assets/Hand-loom.png';
import Benarasi from '../assets/frontend_assets/banarasi.png';
import Chanderi from '../assets/frontend_assets/chanderi.png';
import Kanchi from '../assets/frontend_assets/kanchi.png';

// Styles for modal
Modal.setAppElement('#root'); // Attach modal to the root element

const Hero = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle navigation to specific routes
  const handleImageClick = (route) => {
    navigate(route);
  };

  // Open modal with the selected image
  const handleViewImage = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Categories data
  const categories = [
    { src: Puresilk, label: 'Pure Silk', route: '/PureSilkSaree' },
    { src: Kurtis, label: 'Kurtis', route: '/Kurtis' },
    { src: Pattu, label: 'Pattu', route: '/Pattu' },
    { src: HandLoom, label: 'Hand Loom', route: '/HandLoom' },
    { src: Benarasi, label: 'Banarasi', route: '/Banarasi' },
    { src: Chanderi, label: 'Chanderi', route: '/Chanderi' },
    { src: Kanchi, label: 'Kanchi', route: '/Kanchi' },
  ];

  return (
    <div className="hero-container">
      {/* Hero Carousel */}
      <div className="carousel-container mb-10">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          className="carousel"
        >
          {[Heroimage, HeroImage1, HeroImage2].map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Categories Section */}
      <div className="categories-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="category-item text-center group relative"
            style={{ cursor: 'pointer' }}
          >
            {/* Circular Image */}
            <div
              className="image-wrapper w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden border-2 border-gray-300 group-hover:border-gray-500 transform transition-transform duration-300 group-hover:scale-105"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>

            {/* View Icon */}
            <div
              className="absolute top-3 right-5 p-1  rounded-full shadow-lg cursor-pointer sm-top-3 right-5 p-1"
              onClick={() => handleViewImage(item.src)}
            >
              
              <FontAwesomeIcon icon={faMagnifyingGlassPlus} style={{ color: 'white' }} className="h-4 w-4" />

            </div>
            


            {/* Category Label */}
            <p className="mt-3 text-sm md:text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for Image View */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="View Image"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90%',
            maxHeight: '90%',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        {selectedImage && (
          <div>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-[70vh] rounded-lg"
            />
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Hero;
