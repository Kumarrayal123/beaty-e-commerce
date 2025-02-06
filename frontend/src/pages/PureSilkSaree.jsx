

// import React, { useContext } from "react";
// import Title from "../components/Title";
// import { ShopContext} from '../context/ShopContext'
// import { useNavigate } from 'react-router-dom';

// const PureSilkSaree = () => {
// const { silkproduct,currency } = useContext(ShopContext)
// const navigate = useNavigate();

// const handleImageClick = (productId) => {
//   navigate(`/product/${productId}`); // Navigate to the product page with product ID
// };

//   return (
//     <div className="my-10">
//       <div className="text-center py-8 text-3xl">
//         <Title text2="SILK SAREE COLLECTION"/>
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//           Wrap yourself in the unmatched luxury of our latest soft silk saree collection
//         </p>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-10">
//       {silkproduct.map((product, index) => (
//         <div div className="relative group-hover:scale-105 group-hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer group-hover:scale-105"

//         >
//           <img
//             src={product.image[0]}
//             alt={product.name}
//             className="w-full h-auto object-cover transition-all duration-300 cursor-pointer"
//             onClick={() => handleImageClick(product._id)}

//           />
//           <div className="text-center py-4">
//               <p className="text-lg font-semibold text-gray-800">{product.name}</p>
//               <p className="text-md text-gray-600">{currency} {product.price}</p>
//             </div>
//         </div>
//       ))}
//     </div>
// </div>
//   );
// };

// export default PureSilkSaree;


import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PureSilkSaree = () => {
  const { silkproduct, currency } = useContext(ShopContext);
  const navigate = useNavigate();
  const { addToCart } = useContext(ShopContext);

  // const handleAddToCart = (product) => {
  //   addToCart(product._id, 'default');
  //   // toast.success(`Added to the cart!`);
  // };

  const handleAddToCart = (product) => {
    addToCart(product._id, 'default');
    toast.success(`Added to the cart!`);
  };

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text2="SILK SAREE COLLECTION" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Wrap yourself in the unmatched luxury of our latest soft silk saree collection
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-10">
        {silkproduct.map((product) => (
          <div
            key={product._id}
            className="relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 ease-in-out"
          >
            {/* Product Image with Hover Effect */}
            <div className="relative">
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out cursor-pointer group-hover:scale-105"
                onClick={() => handleImageClick(product._id)}
              />
              {/* Add to Cart Button */}

             
              <div className="bg bg-opacity-50 text-center p-2 opacity-1 duration-500 ease-in-out">
                <button

                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center py-4">
              <p className="text-lg font-semibold text-gray-800">{product.name}</p>
              <p className="text-md text-gray-600">{currency} {product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  ); a
};

export default PureSilkSaree;
