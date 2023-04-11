import express from 'express';

//component import 
import categoryCntrl from '../controllers/categoryCntrl.js';
import auth from '../middlewares/auth.js';
import authAdmin from '../middlewares/authAdmin.js';

export const catRouter = express.Router();

catRouter.route('/category')
    .get(categoryCntrl.getCategories)
    .post(auth, authAdmin, categoryCntrl.createCategory)

catRouter.route('/category/:id')
    .delete(auth, authAdmin, categoryCntrl.deleteCategory)
    .put(auth, authAdmin, categoryCntrl.updateCategory)
    
