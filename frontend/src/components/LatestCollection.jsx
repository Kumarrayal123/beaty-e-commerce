// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
  
//   const [latestProducts,setlatestProducts]=useState([]);

//   useEffect(()=>{
//     setlatestProducts(products.slice(0,10));
//   },[])

//   return (
//     <div className='my-10'>
//       <div className='text-center py-8 text-3xl'>
//         <Title text1="LATEST" text2="COLLECTIONS" />
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//         Beauty creams nourish and hydrate the skin, promoting a radiant and healthy appearance
//         </p>
//       </div>

     
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {
//             latestProducts.map((item,index)=>(
//                <ProductItem key={index} id={item} image={item.image} name={item.name} price={item.price} />
//             ))
//         }
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';
// import hero from '../assets/frontend_assets/hero2.webp';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10)); // Get the latest 10 products
//   }, [products]);

//   return (
//     <div className='my-10'>
//       <div className='text-center py-8 text-3xl'>
//         <Title text1="LATEST" text2="COLLECTIONS" />
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//           Beauty creams nourish and hydrate the skin, promoting a radiant and healthy appearance
//         </p>
//       </div>

//       {/* Rendering latest products */}
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {latestProducts.map((item) => (
//           <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
//         ))}
//       </div>

//       <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mt-10">
//         {/* Background Image Section */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${hero})`, // Correctly use the imported hero image
//           }}
//         >
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>

//         {/* Text Overlay Section */}
//         <div className="relative z-10 h-full flex flex-col justify-center items-start text-left text-white px-10 md:px-20 lg:px-40">
//           <h5 className="text-xs md:text-sm uppercase tracking-wider mb-2">
//             Create Your Daily Rituals With Us
//           </h5>
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//             Self-Care Specials at <br /> 40% Off
//           </h1>
//           <div className="mt-6">
//             <button className="flex items-center gap-2 px-6 py-2 text-sm md:text-base font-semibold bg-white text-black rounded-full shadow hover:bg-gray-200">
//               <span>Shop Now</span>
//               <span className="h-2 w-2 rounded-full bg-black"></span>
//             </button>
//           </div>
//         </div>

//         {/* Rewards Program */}
//         <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
//           <span className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
//             🎁
//           </span>
//           <p className="text-xs md:text-sm font-medium">82°E Rewards Program</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;











// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';
// import hero from '../assets/frontend_assets/hero2.webp';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10)); // Get the latest 10 products
//   }, [products]);

//   return (
//     <div className="my-10">
//       {/* Latest Products Section */}
//       <div className="text-center py-8 text-3xl">
//         <Title text1="LATEST" text2="COLLECTIONS" />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//           Beauty creams nourish and hydrate the skin, promoting a radiant and healthy appearance
//         </p>
//       </div>

//       {/* Rendering Latest Products */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {latestProducts.map((item) => (
//           <ProductItem key={item._id} id={item._id} image={item.image[0]} name={item.name} price={item.price} />
//         ))}
//       </div>

//       {/* Hero Section */}
//       <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] mt-10 bg-black">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-80"
//           style={{
//             backgroundImage: `url(${hero})`,
//           }}
//         ></div>

//         {/* Text Overlay Section */}
//         <div className="relative z-10 h-full flex flex-col justify-center items-start text-left text-white px-10 md:px-20 lg:px-40">
//           <h5 className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
//             Create Your Daily Rituals With Us
//           </h5>
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
//             Self-Care Specials at <br /> <span className="text-primary">40% Off</span>
//           </h1>
//           <p className="text-lg md:text-xl mb-6 max-w-xl">
//             Treat yourself to luxurious skincare, crafted with care, now available at unbeatable prices. Explore our
//             exclusive offers.
//           </p>
//           <div>
//             <button className="flex items-center gap-2 px-6 py-2 text-sm md:text-base font-semibold bg-primary text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
//               <span>Shop Now</span>
//               <span className="h-2 w-2 rounded-full bg-white"></span>
//             </button>
//           </div>
//         </div>

//         {/* Rewards Program */}
//         <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
//           <span className="flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full">
//             🎁
//           </span>
//           <p className="text-xs md:text-sm font-medium text-primary">Rewards</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import hero from '../assets/frontend_assets/hero2.webp';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Get the latest 10 products
  }, [products]);

  const handleShopNowClick = () => {
    navigate('/collection'); // Navigate to the Collection page
  };

  return (
    <div className="my-10">
      {/* Latest Products Section */}
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Beauty creams nourish and hydrate the skin, promoting a radiant and healthy appearance
        </p>
      </div>

      {/* Rendering Latest Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item) => (
          <ProductItem key={item._id} id={item._id} image={item.image[0]} name={item.name} price={item.price} />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] mt-10 bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        ></div>

        {/* Text Overlay Section */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left text-white px-10 md:px-20 lg:px-40">
          <h5 className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
            Create Your Daily Rituals With Us
          </h5>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Self-Care Specials at <br /> <span className="text-primary">40% Off</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Treat yourself to luxurious skincare, crafted with care, now available at unbeatable prices. Explore our
            exclusive offers.
          </p>
          <div>
            <button
              onClick={handleShopNowClick} // Add onClick handler
              className="flex items-center gap-2 px-6 py-2 text-sm md:text-base font-semibold bg-primary text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span>Shop Now</span>
              <span className="h-2 w-2 rounded-full bg-white"></span>
            </button>
          </div>
        </div>

        {/* Rewards Program */}
        <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
          <span className="flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full">
            🎁
          </span>
          <p className="text-xs md:text-sm font-medium text-primary">Rewards</p>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;

