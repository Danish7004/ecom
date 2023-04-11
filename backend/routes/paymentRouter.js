import express from 'express';
//COMPONENT IMPORT
import paymentCntrl from '../controllers/paymentCntrl.js';
import auth from '../middlewares/auth.js';
import authAdmin from '../middlewares/authAdmin.js';

export const paymentRouter = express.Router();

paymentRouter.route('/payment')
    .get(auth, authAdmin, paymentCntrl.getPayments)
    .post(auth, paymentCntrl.createPayment)


