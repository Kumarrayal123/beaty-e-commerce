import Stripe from "stripe";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config(); 

// Ensure Stripe secret key is set
if (!process.env.STRIPE_SECRET) {
  console.error("Missing STRIPE_SECRET in environment variables");
  process.exit(1); // Stop the server if Stripe key is missing
}

const stripe = new Stripe(process.env.STRIPE_SECRET);

export const makePayment = async (req, res) => {
  try {
    // Ensure request body contains products
    const { products } = req.body;
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: "No products found" });
    }

    // Format line items for Stripe Checkout
    const lineItems = products.map((product) => {
      if (!product.name || !product.price || !product.quantity) {
        throw new Error("Invalid product data"); // Ensure all fields exist
      }

      return {
        price_data: {
          currency: "usd",
          product_data: { name: product.name },
          unit_amount: Math.round(product.price * 100), // Convert price to cents
        },
        quantity: product.quantity,
      };
    });

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Checkout Error:", error.message);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};
