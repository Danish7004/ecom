import Products from '../models/productModel.js';

//filter, sorting and paginating
class Apifeature{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString} //queryString = req.query
        // console.log({before: queryObj}) //before delete page

        const excludeFields = ['page', 'sort', 'limit']
        excludeFields.forEach(el => delete(queryObj[el]))

        // console.log({after: queryObj}) //after delete page

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)
        //regex = find on a single alphabet, word or sentence basis related products 


        this.query.find(JSON.parse(queryStr))

        // console.log({queryObj, queryStr})

        return this
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join()
            console.log(sortBy);
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1||9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}


const productCntrl = {
        
    getProducts: async(req, res) =>{
        try {
    
        const features = new Apifeature(Products.find(), req.query).filtering().sorting().paginating()
        const products = await features.query;

            res.json({
                status: 'success',
                result: products.length,
                products:products
            });
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }, 

    createProducts: async(req, res) =>{
        try {
            const {product_id, title, price, description, content, images, category} = req.body;
            if(!images) return res.status(400).json({msg: 'no images upload'})

            const products = await Products.findOne({product_id})
            if(products) return res.status(400).json({msg: "this product is already exist"})

            const newProduct = new Products({
                product_id, title: title.toLowerCase(), price, description, content, images, category
            })

            newProduct.save();
            return res.json({msg: "product created"});

        } catch (err){
            return res.status(500).json({msg: err.message})
        }
    }, 

    deleteProducts: async(req, res) =>{
        try {
            await Products.findByIdAndDelete(req.params.id)
                res.json({msg: "product deleted"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }, 

    updateProducts: async(req, res) =>{
        try {
            const {title, price, description, content, images, category} = req.body;
            if(!images) return res.status(400).json({msg: 'no images upload'})

            await Products.findOneAndUpdate(
                {_id: req.params.id},
               { title: title.toLowerCase(), price, description, content, images, category}
                );

                res.json({msg:"product updated"})
                
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    } 
}

export default productCntrl;