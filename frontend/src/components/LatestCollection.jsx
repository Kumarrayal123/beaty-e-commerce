



import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { ToastContainer } from "react-toastify";

const LatestCollection = () => {
  const { products, addToCart, currency } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null); // To track which product is hovered
  const navigate = useNavigate();

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  const handleAddToCart = (product) => {
    addToCart(product._id, "default");
  };

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId); // Set the hovered product's ID
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null); // Clear the hovered product's ID
  };

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text2="LATEST COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Wrap yourself in the unmatched luxury of our latest soft silk saree collection
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-10">
        {latestProducts.map((product) => (
          <div
            key={product._id}
            className="relative overflow-hidden rounded-lg shadow-lg group"
            onMouseEnter={() => handleMouseEnter(product._id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative">
              <img
                src={
                  hoveredProduct === product._id && product.image[1]
                    ? product.image[1]
                    : product.image[0]
                }
                alt={product.name}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out cursor-pointer group-hover:scale-105"
                onClick={() => handleImageClick(product._id)}
              />
              <div className="bg bg-opacity-50 text-center p-2 opacity-1 duration-500 ease-in-out">
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>

            <div className="text-center py-4">
              <p className="text-lg font-semibold text-gray-800">{product.name}</p>
              <p className="text-md text-gray-600">
                {currency} {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default LatestCollection;




