import express from 'express';
//COMPONENT IMPORT
import razorpayControl from '../controllers/razorpayControl.js'
import auth from '../middlewares/auth.js';
// import authAdmin from '../middlewares/authAdmin.js';

export const razorpaymentRouter = express.Router();

razorpaymentRouter.route('/payment/order')
    // .get(auth, authAdmin, razorPayment.getPayments)
    .post(auth, razorpayControl.createPayment)

razorpaymentRouter.route("/payment/success")
    .post(auth, razorpayControl.verifySignature);