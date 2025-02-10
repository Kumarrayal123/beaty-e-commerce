
import React, { createContext, useState, useMemo, useEffect } from 'react';
import { products, silkproduct,SoftPattu,KanchiSoft,KanchiFancy,KanchiPattu,SoftSilk } from '../assets/frontend_assets/assets'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
// import NightWear from '../pages/NightWear';


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;

  // Ensure this environment variable is correctly set in your .env file
  const backendUrl = import.meta.env.VITE_BACKEND_URL; // Corrected typo from VITE_BCAKEND_URL to VITE_BACKEND_URL

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState(null);
  // Ensure this is called within a Router context
  const navigate = useNavigate();

 
 
  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData); // Update cartItems state

    // If token exists, send cart data to the backend
    if (token) {
      try {
        const response = await axios.post(
          "https://backend-one-smoky-52.vercel.app/api/cart/add", 
          { itemId, size }, 
          { headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` } }
        );
        
        // Log the full response for debugging
        console.log("Response from backend:", response.data);

        if (response.data.success) {
          toast.success("Item added to the cart successfully!");
        } else {
          toast.error(response.data.message || "An error occurred");
        }
      } catch (error) {
        console.error("Error during add to cart request:", error);
        toast.error(error.message);
      }
    }
};

  
  
  useEffect(() => {
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${backendUrl}/api/user`, {
            headers: { Authorization: `Bearer ${token}` },
          });
      
          // Log the entire response to confirm it contains the expected data
          console.log("Fetched User Data:", response.data);
      
          if (response.data) {
            setUserData(response.data); // Store user data in state
          } else {
            console.error("No data returned from API");
            toast.error("Failed to fetch user information.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          toast.error("Failed to fetch user information.");
        }
      };
      
  
      fetchUserData();
    }
    
  }, [token]);

  if (!userData) {
    console.log("User data not loaded yet or fetch failed.");
  }
  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);
   

  // Calculate cart count
  const getCartCount = useMemo(() => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        totalCount += cartItems[items][item];
      }
    }
    return totalCount;
  }, [cartItems]); // Recalculate when cartItems changes

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId] && cartData[itemId][size]) {
      if (quantity <= 0) {
        delete cartData[itemId][size]; // Remove size if quantity is zero
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId]; // Remove item if no sizes left
        }
      } else {
        cartData[itemId][size] = quantity; // Update quantity
      }
    }
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const itemInfo = products.find(product => product._id === itemId);
      
      if (itemInfo) {
        for (const size in cartItems[itemId]) {
          const quantity = cartItems[itemId][size];
          totalAmount += itemInfo.price * quantity; // Calculate total based on price
        }
      }
    }

    return totalAmount;
  };

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);

  // Context value to be shared
  const value = {
    products,
    silkproduct,
    SoftPattu,
    KanchiPattu,
    SoftSilk,
    KanchiFancy,
    KanchiSoft,
    // NightWear,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
    userData
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
