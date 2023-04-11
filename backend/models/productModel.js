import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    product_id :{
        type: String,
        required:true,
        trim:true,
        unique:true,
    },
    title :{
        type: String,
        required:true,
        trim:true,
    },
    price :{
        type: Number,
        required:true,
        trim:true,
    },
    description :{
        type: String,
        required:true,
    },
    content :{
        type: String,
        required:true,
    },
    images :{
        type: Object,
        required:true,
    },
    category :{
        type: String,
        required:true,
    },
    checked :{
        type: Boolean,
        default:false,
    },
    sold :{
        type: String,
        default:0,
    },
},{timestamps:true});

const Products = mongoose.model('Products', productSchema)

export default Products;