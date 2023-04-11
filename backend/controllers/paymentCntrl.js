import Payments from "../models/paymentModel.js";
import User from "../models/userModel.js";
import Products from "../models/productModel.js";

const paymentCntrl = {

    getPayments: async(req, res ) =>{
        try {
            const payments = await Payments.find()
            res.json(payments)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    createPayment: async(req, res) =>{
        try {
            const user = await User.findById(req.user.id).select('name email')
            if(!user) return res.status(400).json({msg: err.message})

            const {cart, paymentID, address} = req.body;
            const {_id, name, email} = user;

            const newPayment = new Payments({
                user_id: _id, name, email, cart, paymentID, address
            })
            // console.log(newPayment)
            cart.filter(item =>{
                return sold(item._id, item.qty, item.sold)
            })

            await newPayment.save();
            res.json({msg: "payment success"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

};


const sold = async(id, qty, oldsold) =>{
    await Products.findOneAndUpdate({_id: id}, {
        sold:  oldsold +++ qty
    })
}


export default paymentCntrl;