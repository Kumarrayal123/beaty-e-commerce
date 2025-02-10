



// import React, { useContext, useState, useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/frontend_assets/assets";
// import CartTotal from "../components/CartTotal";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { products, silkproduct, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const currencySymbol = "₹";

//   useEffect(() => {
//     const tempData = [];
//     const cartProductCategories = new Set();

//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         if (cartItems[itemId][size] > 0) {
//           const product = products.find((product) => product._id === itemId);
//           if (product) {
//             tempData.push({
//               _id: itemId,
//               name: product.name,
//               image: product.image,
//               size: size,
//               quantity: cartItems[itemId][size],
//               price: product.price,
//               category: product.category,
//             });

//             cartProductCategories.add(product.category);
//           }
//         }
//       }
//     }

//     setCartData(tempData);

//     const related = products.filter(
//       (product) =>
//         cartProductCategories.has(product.category) &&
//         !tempData.some((cartItem) => cartItem._id === product._id)
//     );
//     setRelatedProducts(related);
//   }, [cartItems, products]);

//   const handleIncrement = (itemId, size) => {
//     const currentQuantity = cartItems[itemId]?.[size] || 0;
//     updateQuantity(itemId, size, currentQuantity + 1);
//   };

//   const handleDecrement = (itemId, size) => {
    
//     const item = cartData.find((cartItem) => cartItem._id === itemId && cartItem.size === size);
//     if (item ) {
//       if (item.quantity > 1) {
//         updateQuantity(itemId, size, item.quantity - 1);
//       }else{
//         updateQuantity(itemId, size, 0);
//       }
//     }
//   };

//   return (
//     <div className="border-t pt-14 px-4 sm:px-8">
//       <div className="text-2xl mb-3"></div>

//       {/* Cart Items */}
//       <div>
//         {cartData.map((item) => (
//           <div
//             key={`${item._id}-${item.size}`}
//             className="py-4 border-b text-white-700 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center"
//           >
//             <div className="flex items-start gap-6 sm:gap-4">
//               <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />
//               <p className="text-xs sm:text-lg text-white-700 font-medium">{item.name}</p>
//             </div>

//             <p className="px-1 sm:px-2 sm:py-0.5 px-2 py-1 text-black">
//               {currencySymbol}
//               {item.price.toFixed(2)}
//             </p>
//             <p className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]">
//               Size: {item.size}
//             </p>

//             {/* Quantity Increment/Decrement */}
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => handleDecrement(item._id, item.size)}
//                 className="px-2 py-1 border rounded bg-gray-200 text-black"
//               >
//                 -
//               </button>
//               <span className="px-3">{item.quantity}</span>
//               <button
//                 onClick={() => handleIncrement(item._id, item.size)}
//                 className="px-2 py-1 border rounded bg-gray-200 text-black"
//               >
//                 +
//               </button>
//             </div>

//             <img
//               onClick={() => updateQuantity(item._id, item.size, 0)}
//               className="w-4 sm:w-5 cursor-pointer text-white-700"
//               src={assets.bin_icon}
//               alt="Remove"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Cart Total */}
//       <div className="flex justify-end my-6 sm:my-12">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal currencySymbol={currencySymbol} />
//           <div className="w-full text-end">
//             <button
//               onClick={() => navigate("/place-order")}
//               className="bg-black text-white text-sm sm:text-base my-4 px-6 py-3"
//             >
//               CHECKOUT
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="mt-12">
//         <h2 className="text-xl font-semibold mb-6">Related Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {relatedProducts.map((product) => (
//             <div
//               key={product._id}
//               className="border p-4 flex flex-col items-center text-center cursor-pointer"
//             >
//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={product.image[0]}
//                   alt={product.name}
//                   className="w-full h-auto mb-4"
//                 />
//                 <h3 className="text-lg font-medium">{product.name}</h3>
//                 <p className="text-gray-500 mt-2">
//                   {currencySymbol}
//                   {product.price.toFixed(2)}
//                 </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets, KanchiSoft } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import { Link } from "react-router-dom";
import SoftPattu from "../components/pattu/SoftPattu";
import KanchiPattu from "../components/pattu/KanchiPattu";
// import NightWear from "./NightWear";



const Cart = () => {
  const { products, silkproduct,SoftPattu, cartItems,KanchiSoft, updateQuantity,KanchiFancy,KanchiPattu, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const currencySymbol = "₹";

  useEffect(() => {
    const tempData = [];
    const cartProductCategories = new Set();

    // Merge products and silkproducts
    const allProducts = [...products, ...silkproduct,...SoftPattu,...KanchiSoft,...KanchiFancy,...KanchiPattu,];

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = allProducts.find((product) => product._id === itemId);
          if (product) {
            tempData.push({
              _id: itemId,
              name: product.name,
              image: product.image,
              size: size,
              quantity: cartItems[itemId][size],
              price: product.price,
              category: product.category,
            });

            cartProductCategories.add(product.category);
          }
        }
      }
    }

    setCartData(tempData);

    const related = allProducts.filter(
      (product) =>
        cartProductCategories.has(product.category) &&
        !tempData.some((cartItem) => cartItem._id === product._id)
    );
    setRelatedProducts(related);
  }, [cartItems, products, silkproduct,SoftPattu,KanchiSoft,KanchiFancy,KanchiPattu]);

  const handleIncrement = (itemId, size) => {
    const currentQuantity = cartItems[itemId]?.[size] || 0;
    updateQuantity(itemId, size, currentQuantity + 1);
  };

  const handleDecrement = (itemId, size) => {
    const item = cartData.find((cartItem) => cartItem._id === itemId && cartItem.size === size);
    if (item) {
      if (item.quantity > 1) {
        updateQuantity(itemId, size, item.quantity - 1);
      } else {
        updateQuantity(itemId, size, 0);
      }
    }
  };

  return (
    <div className="border-t pt-14 px-4 sm:px-8">
  {/* Cart Header */}
  <div className="text-2xl font-semibold mb-6 text-gray-800">Your Cart</div>

  {/* Cart Items */}
  <div>
    {cartData.map((item) => (
      <div
        key={`${item._id}-${item.size}`}
        className="py-4 border-b border-gray-200 grid grid-cols-1 sm:grid-cols-4 gap-6 items-center"
      >
        {/* Product Details */}
        <div className="flex items-center gap-6">
          <img
            className="w-16 sm:w-20 rounded-lg"
            src={item.image[0]}
            alt={item.name}
          />
          <p className="text-gray-800 text-sm sm:text-base font-medium">
            {item.name}
          </p>
        </div>

        {/* Price */}
        <p className="text-gray-700 font-medium text-sm sm:text-base">
          {currencySymbol}
          {item.price.toFixed(2)}
        </p>

        {/* Size */}
        <p className="bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium rounded px-2 py-1 max-w-[100px] text-center">
          Size: {item.size}
        </p>

        {/* Quantity Increment/Decrement */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDecrement(item._id, item.size)}
            className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm"
          >
            -
          </button>
          <span className="text-gray-800 font-semibold">{item.quantity}</span>
          <button
            onClick={() => handleIncrement(item._id, item.size)}
            className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <img
          onClick={() => updateQuantity(item._id, item.size, 0)}
          className="w-5 cursor-pointer hover:text-red-500"
          src={assets.bin_icon}
          alt="Remove"
        />
      </div>
    ))}
  </div>

  {/* Cart Total */}
  <div className="flex justify-end my-8">
    <div className="w-full sm:w-[450px] bg-gray-50 p-6 rounded-lg shadow-sm">
      <CartTotal currencySymbol={currencySymbol} />
      <div className="w-full text-end mt-4">
        <button
          onClick={() => navigate('/place-order')}
          className="bg-black text-white text-sm sm:text-base rounded-lg px-6 py-3 font-semibold hover:bg-gray-800 transition"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  </div>

  {/* Related Products Section */}
  <div className="mt-12">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
      Related Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <div
          key={product._id}
          className="border rounded-lg p-4 flex flex-col items-center text-center transition hover:shadow-lg hover:bg-gray-50"
        >
          <Link to={`/product/${product._id}`}>
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h3 className="text-gray-800 text-lg font-medium">{product.name}</h3>
            <p className="text-gray-600 mt-2 text-sm">
              {currencySymbol}
              {product.price.toFixed(2)}
            </p>
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Cart;
