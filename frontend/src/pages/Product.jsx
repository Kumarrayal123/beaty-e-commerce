import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircle } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = () => {
  const { productId } = useParams();
  const { products, silkproduct,NightWear, SoftPattu, currency, addToCart,} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [color, setColor] = useState("");
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isWashingCareVisible, setIsWashingCareVisible] = useState(false);
  const [isstylingVisible ,setIsStylingVisible] = useState(false)
 
  // useEffect(() => {
  //   // Ensure data is loaded before proceeding
  //   if (products?.length || silkproduct?.length ||NightWear?.length) {
  //     // First check if product exists in `silkproduct`
  //     const isSilkProduct = silkproduct?.find((item) => item._id === productId);
  //     const product = isSilkProduct || products?.find((item) => item._id === productId);
      
  //     if (product) {
  //       setProductData(product);
  //       setImage(product.image[0]); // Set default image
  //       setRelatedProducts(
  //         (isSilkProduct ? silkproduct : products)?.filter(
  //           (item) => item.name === product.name && item._id !== productId
  //         )
  //       );
  //     }
  //   }
  // }, [productId, products, silkproduct]);
 
  useEffect(() => {
    // Ensure that NightWear is an array
    const validNightWear = Array.isArray(NightWear) ? NightWear : [];
  
    // Ensure data is loaded before proceeding
    if (
      (Array.isArray(products) && products.length) ||
      (Array.isArray(silkproduct) && silkproduct.length) ||
      validNightWear.length > 0 ||
      (Array.isArray(SoftPattu) && SoftPattu.length)
    ) {
      // Check if product exists in any of the arrays
      const isSilkProduct = silkproduct?.find((item) => item._id === productId);
      const isNightWearProduct = validNightWear.find((item) => item._id === productId);
      const isSoftPattuProduct = SoftPattu?.find((item) => item._id === productId);
      
      // Find the product from the correct array
      const product = isSilkProduct || isNightWearProduct || isSoftPattuProduct || products?.find((item) => item._id === productId);
      
      if (product) {
        setProductData(product);
        setImage(product.image[0]); // Set default image
        setRelatedProducts(
          (isSilkProduct ? silkproduct : 
           isNightWearProduct ? validNightWear : 
           isSoftPattuProduct ? SoftPattu : products
          )?.filter(
            (item) => item.name === product.name && item._id !== productId
          )
        );
      }
    }
  }, [productId, products, silkproduct, NightWear, SoftPattu]);
  
  
  
  const handleAddToCart = () => {
    addToCart(productData._id);
    // navigate('/cart');
    toast.success("Item added to the cart successfully!");
  };

  const toggleVisibility = () => {
    setIsFeaturesVisible((prev) => !prev);
  };
  const toggleFeaturesVisibility = () => {
    setIsFeaturesVisible((prevState) => !prevState);
  };

  // Toggle visibility of washing care instructions
  const toggleWashingCareVisibility = () => {
    setIsWashingCareVisible((prevState) => !prevState);
  };

  const toggleStylingVisibility = () => {
    setIsStylingVisible((prevState) => !prevState);
  };

  return productData ? (
    <div className="product-container">
      <div className="flex flex-col sm:flex-row gap-12 p-4 sm:p-6 lg:p-8">
  <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

   
    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19.7%] w-full p-2 sm:p-4">
  {productData.image.map((item, index) => (
    <img
      src={item}
      key={index}
      className="w-[24%] sm:w-full h-[120px] sm:h-auto sm:mb-2 flex-shrink-0 cursor-pointer mt-2 object-cover rounded-lg border border-gray-200"
      onClick={() => setImage(item)}
    />
  ))}
</div>

    <div className='w-full sm:w-[60%] p-2 sm:p-4 object-cover rounded-lg'>
      
      <img 
  className="w-[400px] h-[450px] object-cover rounded-lg" 
  src={image} 
  alt={productData.name} 
/>

    </div>
    
  </div>

  {/* Product Info */}
  <div className="flex-1 mt-2 p-4 sm:p-6 lg:p-8">
    <h1 className="text-2xl font-medium">{productData.name}</h1>
    {/* <hr className="mt-4 w-full sm:w-4/5 border-t-2 border-gray-300" /> */}
    <p className="text-3xl font-medium mt-5">
      {currency}
      {productData.price}
    </p>
    <p className="text-gray-500 mt-5">{productData.description}</p>
    <hr className="mt-4 w-full sm:w-4/5 border-t-2 border-gray-300" />

    {/* Color Selection */}
    <div className="colors mt-4 flex gap-2">
      {productData.colors?.map((item, index) => (
        <button
          key={index}
          className={`color-button ${item === color ? "active" : ""}`}
          style={{ backgroundColor: item }}
          onClick={() => setColor(item)}
        ></button>
      ))}
    </div>

    <button
      onClick={handleAddToCart}
      className="add-to-cart bg-black text-white mt-5 p-3 sm:p-6 lg:p-2 rounded-lg"
    >
      ADD TO CART
    </button>
    <hr className="mt-4 w-full sm:w-4/5 border-t-2 border-gray-300" />
    {/* <hr className='mt-8 sm:w-4/5 py-5' /> */}
    <div className='text-sm text-gray-500 flex flex-col gap-1 p-3 sm:p-6 lg:p-1 '>
      <p>100% original products</p>
      <p>Cash on delivery is available for this product</p>
      <p>Easy return exchange available within 7 days</p>
    </div>
    <hr className="mt-4 w-full sm:w-4/5 border-t-2 border-gray-300" />

    {/* Product Features Section */}
    <div className="text-sm text-gray-500 mt-1 flex flex-col gap-1 p-3 sm:p-3 lg:p-1">
      <p onClick={toggleFeaturesVisibility} className="cursor-pointer">
        <FontAwesomeIcon icon={faPlus} />
        PRODUCT FEATURE
      </p>
      
      <ul
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isFeaturesVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Length: 6.5 meters, Width: 46 inches</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Comes with zari stripe running blouse</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Fabric: Luxurious Mashru Pure Banarasi Silk</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Adorned with handmade tassels at the loose ends</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Provides a soft and comfortable feel</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Pre-washed for your convenience</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Offers intricate detailing with a luxurious finish</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Comes with free edging on both sides of the saree</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Exclusively designed by our expert designers and made in Varanasi</span>
        </li>
      </ul>
      <hr className="mt-4 w-full sm:w-4/5 border-t-2 border-gray-300" />
    </div>

    {/* WASHING & CARE INSTRUCTION */}
    <div className="text-sm text-gray-500 flex flex-col p-3 sm:p-6 lg:p-1">
      <p onClick={toggleWashingCareVisibility} className="cursor-pointer">
        <FontAwesomeIcon icon={faPlus} />
        WASHING & CARE INSTRUCTION STYLING TIPS
      </p>
      <ul
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isWashingCareVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Suitable for dry cleaning.</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Can be hand-washed with cold water.</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Avoid soaking or bleaching.</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Gently spin to remove excess water.</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Dry in a shaded area, away from direct sunlight.</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Iron with medium steam.</span>
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
          <span>Store your saree in a cotton bag or box when not in use.</span>
        </li>
      </ul>
      <hr className="mt-4 w-full sm:w-4/5 border-t-2 border-gray-300" />
    </div>

    {/* Styling Instruction Section */}
    <div className="text-sm text-gray-500 flex flex-col p-3 sm:p-6 lg:p-1">
      <p onClick={toggleStylingVisibility} className="cursor-pointer">
        <FontAwesomeIcon icon={faPlus} />
        STYLING TIPS
      </p>
      <ul
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isstylingVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <li className="flex items-start gap-2">
          <FontAwesomeIcon
            icon={faCircle}
            className="text-white-500"
            style={{ fontSize: '6px', marginTop: '10px' }}
          />
          <span className="text-black-700 text-sm leading-relaxed">
            No need to fret, I'm here to spill the best style tips for rocking that Banarasi silk saree!
            Imagine pairing that stunning red Banarasi with a sleeveless sweetheart neckline golden blouse—talk about a match made in fashion heaven!
            Drape your saree with effortless open pleats, and pin them in place with ease for that perfect flow.
            For makeup, go for a chic nude look with a touch of nude-brown lipstick and kajal to make your eyes pop.
            Now, let's talk accessories—emerald jewelry will provide a striking contrast and elevate your ensemble's beauty.
            As for your hair, indulge in a blow-dry and add some curls for a captivating wavy effect, letting it cascade down with grace.
            And don't you dare forget your bangles and clutch purse! Slip into your favorite heels, and voila, you're all set to make a dazzling entrance at any special occasion.
          </span>
        </li>
      </ul>
      <hr className="mt-4 w-full sm:w-4/5 border-t-2 border-gray-300" />
    </div>
  </div>
</div>

      <ToastContainer />
    </div>
  ) : (
    <p>Loading product details...</p>
  );
};

export default Product;
