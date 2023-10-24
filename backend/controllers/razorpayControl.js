import dotenv from "dotenv";
import Razorpay from "razorpay";
import User from "../models/userModel.js";
import crypto from "crypto";

dotenv.config();

const razorpayControl = {
  createPayment: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("name email");
      if (!user) return res.status(400).json({ msg: err.message });

      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });
      const { totalAmount } = req.body;

      const options = {
        amount: totalAmount * 100, // amount in smallest currency unit
        currency: "INR",
        receipt: "receipt_order_74394"
      };

      const order = await instance.orders.create(options);

      if (!order) return res.status(500).send("Some error occured");

      res.json(order);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  verifySignature: async (req, res) => {
    try {
      // getting the details back from our font-end
      const {
        // orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
      } = req.body;

      const body = razorpayOrderId + "|" + razorpayPaymentId;
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(body.toString()).digest("hex");

       const isAuthentic = expectedSignature === razorpaySignature ;
       if(isAuthentic){
        res.json({
            msg:"success",
            razorpayPaymentId: razorpayPaymentId,
            razorpayOrderId: razorpayOrderId
        })
       }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

export default razorpayControl;
