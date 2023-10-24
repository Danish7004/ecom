import React from 'react';
import BtnRender from './BtnRender';



function ProductItem({product,products, setProducts, isAdmin, deleteProduct}) {
    


        const handleChecked = (e) =>{
           product.checked= !product.checked
           setProducts([...products])
        }


    return (
        <>   
        <div className='product_card'>

            { isAdmin && <input type="checkbox" checked ={product.checked} 
             onChange={handleChecked}/> }

            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}> {product.title}</h2>
                <span>₹{product.price}</span>
                <p>{product.description}</p>
            </div> 

            <BtnRender product={product} deleteProduct={deleteProduct} />
         

         </div>
        
        </>
    );
}

export default ProductItem;