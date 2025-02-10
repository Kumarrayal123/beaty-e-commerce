
import React, { useContext, useState, useRef, useEffect } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import {loadStripe} from '@stripe/stripe-js';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const formRef = useRef(null); // Ref for the entire form
  const firstNameRef = useRef(null); // Ref for the first name input field
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const { navigate, cartItems, products, setCartItems } = useContext(ShopContext);

  // Retrieve token from local storage or context
  const token = localStorage.getItem('token'); // Adjust this line based on how you store your token

  // Focus on the first input field when the component loads
  useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          const product = products.find((product) => product._id === items);
          if (product) {
            totalAmount += product.price * cartItems[items][item];
          }
        }
      }
    }
    return totalAmount;
  };
  const apiURL = "http://localhost:4000/api/makePayment";

  const makePayment = async () => {
    try {
      // const stripe = await loadStripe("pk_test_51QnHSMHw1rxZkPsd7dfMPiIhUdKq89IeC55oKo0NFzAv8enMfNXCIVpB2ybJRx135fmGu9NYSOaMMYh1i7ajqu1o00FXvFVGbv");
  
      // Check if cart has items
      if (!cartItems || Object.keys(cartItems).length === 0) {
        console.error("Cart is empty!");
        toast.error("Your cart is empty. Please add items before proceeding.");
        return;
      }
  
      const formattedProducts = Array.isArray(cartItems)
        ? cartItems
        : Object.values(cartItems);  
  
      console.log("Formatted Products Sent:", formattedProducts);
  
      const body = { 
        products: formattedProducts.map(item => ({
          id: item.id || item._id,
          name: item.name,
          price: item.price * 100, 
          quantity: item.quantity || 1,
        })),
        totalAmount: calculateTotalAmount() * 100,
      };
  

  
      const requestBody = {
        products: formattedProducts,
        totalAmount: calculateTotalAmount() * 100, // Convert to cents
      };
  
      const headers = {
        "Content-Type": "application/json",
      };
  
      console.log("Sending request to create checkout session:", requestBody); // Debugging
  
      // Make API request
      const response = await fetch(`${apiURL}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      
      const session = await response.json();
      console.log("API Response:", session);
      
      if (!session.id) {
        console.error("Invalid session response:", session);
        toast.error("Failed to create a payment session.");
        return;
      }
      
  
      // Redirect to Stripe Checkout
      const stripe = await loadStripe("pk_test_51QnHSMHw1rxZkPsd7dfMPiIhUdKq89IeC55oKo0NFzAv8enMfNXCIVpB2ybJRx135fmGu9NYSOaMMYh1i7ajqu1o00FXvFVGbv");
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("An error occurred while processing your payment.");
    }
  };
  




  

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
  
      // Collect order items from the cart
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
  
      let orderData = {
        address: formData,
        items: orderItems,
        amount: calculateTotalAmount(),
        paymentMethod: method,
      };
  
      if (!token) {
        toast.error("User not authenticated. Please log in.");
        return;
      }
  
      switch (method) {
        case 'cod':
          const response = await axios.post('http://localhost:4000/api/order/place', orderData, {
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` 
            }
          });
  
          if (response.data.success) {
            const orderId = response.data._id || response.data.order?._id;
  
            // Email content for the user
            const userEmailHtml = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2 style="color: #4CAF50;">Thank You for Your Order!</h2>
              <p><strong>Order ID:</strong> ${response.data.orderId}</p>
              <h3>Order Items:</h3>
              <ul style="list-style-type: none; padding:0;">
                ${orderData.items
                  .map(
                    (item) =>
                      `<li style="margin-bottom: 15px; display: flex; align-items: center;">
                         <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto; margin-right: 15px; border: 1px solid #ccc; border-radius: 5px;" />
                        <div>
                          <p style="margin: 0;"><strong>${item.name}</strong></p>
                          <p style="margin: 0;">Size: ${item.size}</p>
                          <p style="margin: 0;">Quantity: ${item.quantity}</p>
                        </div>
                      </li>`
                  )
                  .join("")}
              </ul>
              <p><strong>Total Cost:</strong> $${orderData.amount}</p>
              <p>Thank you for shopping with us!</p>
            </div>
            `;
  
            // Send email to the user
            const userEmailResponse = await axios.post(
              "http://localhost:4000/api/send-mail",
              {
                email: [formData.email],  // Send to user's email
                subject: ` Your Manya Order Confirmation`,
                html: userEmailHtml,
              },
              { headers: { token } }
            );
  
            if (userEmailResponse.data.success) {
              console.log("Email sent to user successfully.");
            } else {
              toast.error("Failed to send email to user.");
            }
  
            // Email content for the admin
            const adminEmailHtml = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2 style="color: #4CAF50;">New Order Received</h2>
              <p><strong>Order ID:</strong> ${response.data.orderId}</p>
              <h3>Order Items:</h3>
              <ul style="list-style-type: none; padding: 0;">
                ${orderData.items
                  .map(
                    (item) =>
                      `  <li class="mb-4 flex items-start p-4 border border-gray-300 rounded-lg shadow-sm">
  <!-- Product Image -->
  <img 
    src="${item.image}" 
    alt="${item.name}" 
    class="w-28 h-auto mr-5 border border-gray-200 rounded-md object-cover" 
  />
  
  <!-- Product Details -->
  <div class="flex-1 text-gray-700">
    <p class="mb-2 text-lg font-semibold text-gray-900">
      ${item.name}
    </p>
    <p class="mb-1 text-sm">
      <span class="font-medium">Size:</span> ${item.size}
    </p>
    <p class="mb-1 text-sm">
      <span class="font-medium">Quantity:</span> ${item.quantity} 
    </p>
    <p class="text-sm">
      <span class="font-medium">Total Cost:</span> $${(item.quantity * item.price).toFixed(2)}
    </p>
  </div>
</li>`
                  )
                  .join("")} 
              </ul>
              <h3>Delivery Details:</h3>
              <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Address:</strong> ${formData.street}, ${formData.city}, ${formData.state}, ${formData.zipcode}, ${formData.country}</p>
              <h3>Payment Method:</h3>
              <p>${method === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</p>
              <p>Thank you for processing the order!</p>
            </div>
            `;
  
            // Send email to the admin
            const adminEmailResponse = await axios.post(
              "http://localhost:4000/api/send-mail",
              {
                email: ["pandureddypatterns@gmail.com"],  // Send to admin's email
                subject: `New Order - Order ID: ${response.data.orderId}`,
                html: adminEmailHtml,
              },
              { headers: { token } }
            );
  
            if (adminEmailResponse.data.success) {
              console.log("Email sent to admin successfully.");
            } else {
              toast.error("Failed to send email to admin.");
            }
  
            // Clear the cart and navigate
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
  
        default:
          break;
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("An error occurred while placing the order.");
    }
  };
  
  
  return (
    <form
      ref={formRef}
      className="flex flex-col sm:flex-row justify gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-10"
      onSubmit={onSubmitHandler}
    >
      {/* Left side */}
      
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px] bg-white p-6 rounded-lg shadow-md">
  <div className="text-xl sm:text-2xl font-semibold text-gray-800">
    <Title text2="Delivery Information" />
  </div>

  <div className="flex flex-col sm:flex-row gap-3">
    <input
      name="firstName"
      ref={firstNameRef} // Use the ref here
      onChange={onChangeHandler}
      className="border border-gray-300 py-2 px-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      type="text"
      placeholder="First Name"
      value={formData.firstName}
    />
    <input
      name="lastName"
      onChange={onChangeHandler}
      className="border border-gray-300 py-2 px-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      type="text"
      placeholder="Last Name"
      value={formData.lastName}
    />
  </div>

  <input
    name="email"
    onChange={onChangeHandler}
    className="border border-gray-300 py-2 px-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    type="email"
    placeholder="Email Address"
    value={formData.email}
  />

  <input
    name="street"
    onChange={onChangeHandler}
    className="border border-gray-300 py-2 px-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    type="text"
    placeholder="Street"
    value={formData.street}
  />

  <div className="flex flex-col sm:flex-row gap-3">
    <input
      name="city"
      onChange={onChangeHandler}
      className="border border-gray-300 py-2 px-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      type="text"
      placeholder="City"
      value={formData.city}
    />
    <input
      name="state"
      onChange={onChangeHandler}
      className="border border-gray-300 py-2 px-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      type="text"
      placeholder="State"
      value={formData.state}
    />
  </div>

  <div className="flex flex-col sm:flex-row gap-3">
    <input
      name="zipcode"
      onChange={onChangeHandler}
      className="border border-gray-300 py-2 px-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      type="text"
      placeholder="Zipcode"
      value={formData.zipcode}
    />
    <input
      name="country"
      onChange={onChangeHandler}
      className="border border-gray-300 py-2 px-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      type="text"
      placeholder="Country"
      value={formData.country}
    />
  </div>

  <input
    name="phone"
    onChange={onChangeHandler}
    className="border border-gray-300 py-2 px-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    type="text"
    placeholder="Phone"
    value={formData.phone}
  />
</div>


      {/* Right Side */}
     
      <div className="mt-8">
  <CartTotal />

  <div className="mt-12">
    <Title text2="Payment Method" />

    <div className="flex flex-col lg:flex-row gap-6 mt-6">
      
      <div
        onClick={makePayment}
        className={`flex items-center gap-4 border p-4 rounded-lg cursor-pointer transition ${
          method === 'stripe' ? 'bg-gray-100 border-green-400 shadow-md' : 'hover:bg-gray-50'
        }`}
      >
        <div
          className={`w-4 h-4 border-2 rounded-full flex-shrink-0 ${
            method === 'stripe' ? 'bg-green-400 border-green-400' : 'border-gray-300'
          }`}
        ></div>
        <img
          className="h-6 mx-2 flex-shrink-0"
          src={assets.stripe_logo}
          alt="Stripe Logo"
        />
      </div>

    
      <div
        onClick={() => setMethod('razorpay')}
        className={`flex items-center gap-4 border p-4 rounded-lg cursor-pointer transition ${
          method === 'razorpay' ? 'bg-gray-100 border-green-400 shadow-md' : 'hover:bg-gray-50'
        }`}
      >
        <div
          className={`w-4 h-4 border-2 rounded-full flex-shrink-0 ${
            method === 'razorpay' ? 'bg-green-400 border-green-400' : 'border-gray-300'
          }`}
        ></div>
        <img
          className="h-6 mx-2 flex-shrink-0"
          src={assets.razorpay_logo}
          alt="Razorpay Logo"
        />
      </div>

      
      <div
        onClick={makePayment}
        className={`flex items-center gap-4 border p-4 rounded-lg cursor-pointer transition ${
          method === 'cod' ? 'bg-gray-100 border-green-400 shadow-md' : 'hover:bg-gray-50'
        }`}
      >
        <div
          className={`w-4 h-4 border-2 rounded-full flex-shrink-0 ${
            method === 'cod' ? 'bg-green-400 border-green-400' : 'border-gray-300'
          }`}
        ></div>
        <p className="text-gray-700 text-base font-medium flex-grow">
          Cash on Delivery
        </p>
      </div>
    </div>
  </div>

  <div className="w-full text-end mt-8">
    <button
      type="submit"
      className="bg-black text-white rounded-lg px-6 py-3 text-sm font-semibold transition hover:bg-gray-800"
    >
      Place Order
    </button>
  </div>
</div>

    </form>
  );
};

export default PlaceOrder;