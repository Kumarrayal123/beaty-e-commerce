import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing order using COD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    // Create a new order
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    const savedOrder = await newOrder.save(); 

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({
      success: true,
      message: "Order placed successfully",
      orderId: savedOrder._id, 
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Placing order using Stripe Method
const placeOrderStripe = async (req, res) => {
  // Your code here
};

// Placing order using Razorpay Method
const placeOrderRazorpay = async (req, res) => {
  // Your code here
};

export { placeOrder, placeOrderStripe, placeOrderRazorpay };
