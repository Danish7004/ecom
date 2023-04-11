import express from 'express';

//component import 
import auth from '../middlewares/auth.js';
import authAdmin from '../middlewares/authAdmin.js';
import productCntrl from '../controllers/productCntrl.js';

export const productRouter = express.Router();

productRouter.route('/products')
    .get(productCntrl.getProducts)
    .post(auth, authAdmin, productCntrl.createProducts)

productRouter.route('/products/:id')
    .delete(auth, authAdmin, productCntrl.deleteProducts)
    .put(auth, authAdmin, productCntrl.updateProducts)    

