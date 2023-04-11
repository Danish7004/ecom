import React, {useContext, useState} from 'react';
import { GlobalState } from '../../../GlobalState';
import ProductItem from '../utils/ProductItem';
import Loading from '../utils/Loading';
import axios from 'axios';
import Filters from './Filters';
import LoadMorProducts from './LoadMorProducts';


function Products(){
    const state = useContext(GlobalState)
    // console.log(state);
    const [products,  setProducts] = state.productsApi.products
    const [isAdmin] = state.userApi.isAdmin
    // console.log(products)
    const [token] = state.token
    const [loading, setLoading] = useState(false);
    const [callBack, setCallBack] = state.productsApi.callBack
    const [isCheck, setIsCheck] = useState(false);
    

    const deleteProduct = async(id, public_id) =>{
        // console.log({id, public_id})
        try {
            setLoading(true)
            if(isAdmin){
            await axios.post('/api/destroy', {public_id}, {
                headers: { Authorization: token}
            }) 
        
            await axios.delete(`/api/products/${id}`, {
                headers: { Authorization: token}
            })
            
            setCallBack(!callBack)
        }  
        setLoading(false)
        setIsCheck(false)
            
        } catch (err) {
            alert(err.response.msg)
        }
              }         


    const selectAll = () =>{
        
        products.forEach(product => {
            
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }


    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
            
        })
    }


    if(loading) return <div><Loading/></div>

    return(
        <>
            <Filters/>
        {
            isAdmin && 
            <div className="delete-all">
                <span>Select All</span>
                <input type="checkbox" checked={isCheck} onChange={selectAll} />
                <button onClick={deleteAll}>Delete All</button>
            </div>
        }
           

        <div className="products">
            {
                products.map(product => {
                    return  <ProductItem key={product._id} product={product} 
                    isAdmin={isAdmin} products={products} setProducts={setProducts}
                    deleteProduct={deleteProduct} />
                             
                       
                })
            }
        </div>
        <LoadMorProducts/>
       { products.length === 0 && <Loading/> }

        </>
    )
}

export default Products;