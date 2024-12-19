// import React from 'react';
// // import Beatyhero from '../assets/Herosection.jpg';
// import hero from '../assets/frontend_assets/hero_img.png';

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* Hero left side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//         <div className='text-[#414141]'>
//           <div className='flex items-center gap-2'>
//             <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//             <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
//           </div>
//           <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//           <div className='flex items-center gap-2'>
//             <p className='font-bold text-sm md:text-base'>SHOP NOW</p>
//             <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//           </div>
//         </div>
//       </div>
//       {/* HERO RIGHT SIDE  */}
//       {/* <img className='w-fll sm:w-1/2' src='{}'/> */}
//       <img className='w-fll sm:w-1/2' src={hero} alt="hero" />
      
//     </div>
    
//   );
// };

// export default Hero;


import React from 'react';
import hero from '../assets/frontend_assets/hero_img.png';
import menvideo from '../assets/frontend_assets/men.mp4';
import skincare from '../assets/frontend_assets/skincare.mp4';
import bodycare from '../assets/frontend_assets/bodycare.mp4';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row border border-gray-400">
        {/* Hero left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
            </div>
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-bold text-sm md:text-base">SHOP NOW</p>
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            </div>
          </div>
        </div>

        {/* Hero right side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <img className="w-full" src={hero} alt="hero" />
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full flex flex-col sm:flex-row justify-around items-center py-2 mt-5 gap-1">
  {/* Skincare */}
  <div className="group relative w-72 h-72 overflow-hidden rounded-lg shadow-md">
    <video
      src={skincare}
      autoPlay
      loop
      muted
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <p className="prata-regular absolute inset-0 flex items-center justify-center text-white font-semibold text-xl bg-black/40 transition-opacity duration-300 group-hover:bg-black/60">
      Skincare
    </p>
  </div>

  {/* Bodycare */}
  <div className="group relative w-72 h-72 overflow-hidden rounded-lg shadow-md">
    <video
      src={bodycare}
      autoPlay
      loop
      muted
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <p className="prata-regular absolute inset-0 flex items-center justify-center text-white font-semibold text-xl bg-black/40 transition-opacity duration-300 group-hover:bg-black/60">
      Bodycare
    </p>
  </div>

  {/* Men */}
  <div className="group relative w-72 h-72 overflow-hidden rounded-lg shadow-md">
    <video
      src={menvideo}
      autoPlay
      loop
      muted
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <p className="prata-regular absolute inset-0 flex items-center justify-center text-white font-semibold text-xl bg-black/40 transition-opacity duration-300 group-hover:bg-black/60">
      Men
    </p>
  </div>
</div>


    </div>
  );
};

export default Hero;
