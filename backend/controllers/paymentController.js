import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const makePayment = async (req, res) => {
  try {
    const { products } = req.body;

    // Ensure products exist
    if (!products || products.length === 0) {
      return res.status(400).json({ error: "No products found" });
    }

    // Convert products into Stripe line items
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: { name: product.name },
        unit_amount: product.price * 100, // Stripe expects amount in cents
      },
      quantity: product.quantity,
    }));

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id }); // Send session ID to frontend
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};
