// import express from 'express';
// import { makePayment } from '../controllers/paymentController.js'; // Assuming payment logic is in the paymentController.js

// const StripeRouter = express.Router();

// paymentRouter.post('/', makePayment);

// export default StripeRouter;

import express from 'express';
import { makePayment } from '../controllers/paymentController.js'; // Assuming payment logic is in paymentController.js

const StripeRouter = express.Router();

StripeRouter.post('/create-checkout-session', makePayment); // Corrected the variable name

export default StripeRouter;

