// import React, { useContext } from "react";
// import Title from "../components/Title";
// import { ShopContext } from "../context/ShopContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import { Nightwear } from "../assets/frontend_assets/assets";

// const NightWear = () => {
//   const { NightWear, currency,addToCart } = useContext(ShopContext); // Ensure handleAddToCart is available in context
//   const navigate = useNavigate();
  

//   const handleImageClick = (productId) => {
//     navigate(`/product/${productId}`); // Navigate to the product details page
//   };
//   const handleAddToCart = (product) => {
//     addToCart(product._id, 'default');
//     // toast.success(`Added to the cart!`);
//   };

//   return (
//     <div className="px-10">
//       <Title title="Night Wear" /> {/* Optional Title Component */}
//       <ToastContainer />
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {Nightwear.map((product) => (
//           <div
//             key={product._id}
//             className="relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 ease-in-out"
//           >
//             {/* Product Image with Hover Effect */}
//             <div className="relative">
//               <img
//                 src={product.image[0]}
//                 alt={product.name}
//                 className="w-full h-auto object-cover transition-transform duration-300 ease-in-out cursor-pointer group-hover:scale-105"
//                 onClick={() => handleImageClick(product._id)}
//               />
//               {/* Add to Cart Button */}
//               <div className="bg bg-opacity-50 text-center p-2 opacity-1 duration-500 ease-in-out">
//                 <button

//                   onClick={() => handleAddToCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="text-center py-4">
//               <p className="text-lg font-semibold text-gray-800">{product.name}</p>
//               <p className="text-md text-gray-600">
//                 {currency} {product.price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NightWear;
