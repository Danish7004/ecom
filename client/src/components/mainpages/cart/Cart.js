import React, {useContext, useEffect, useState} from 'react';
import { GlobalState } from '../../../GlobalState';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import PayPalButton from './PayPalButton';

function Cart(props) {
    const state = useContext(GlobalState);
    const [cart, setCart] = state.userApi.cart;
    const[isLogged] = state.userApi.isLogged;
    const [total, setTotal] = useState(0);
    const [token] = state.token

    const [callback, setCallback] = state.userApi.callback
    const [callBack, setCallBack ] = state.productsApi.callBack


    useEffect(()=>{
        const getTotal = () =>{
            const totala = cart.reduce((prev, item)=>{
                return prev + (item.price * item.qty)
            }, 0)
            setTotal(totala)
        }
        getTotal()
    }, [cart]);

    const addToCart = async(cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    };

    const increament = (id) => {
        cart.forEach(item=>{
            if(item._id === id){
                item.qty += 1
            }
        })
        setCart([...cart])
        addToCart(cart)
    };
    const decreament = (id) =>{
        cart.forEach(item=>{
            if(item._id === id){
                item.qty === 1 ? item.qty = 1 : item.qty -=1
            }
        })
        setCart([...cart])
        addToCart(cart)
    };

    const removeProduct = id =>{
        if(window.confirm("Do you really wants to remove this product")){
            cart.forEach((item, index)=>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
        }
        setCart([...cart])
        addToCart(cart)
    };



    //for payment
    const tranSuccess = async(payment) =>{
        const {paymentID, address} = payment;
        console.log(payment)

        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization : token}
        })

        alert("Your order has been successfully placed")
        setCart([])
        addToCart([])
        setCallback(!callback)
        setCallBack(!callBack)
    }

    
    if(!isLogged) return  <h2 style={{textAlign:"center" , fontSize:"5rem"}}> please login</h2>
   
    if(cart.length === 0) 
    return <h2 style={{textAlign:"center" , fontSize:"5rem"}}> Empty Cart</h2>
   

    return (
        <div>
            {
                cart.map(product=>(

                    <div className="detail cart" key = {product._id}>

                             <img src={product.images.url} alt='' className="img_container"/>

                         <div className="box-detail">
                                    <h2>{product.title}</h2>
                                     <h3>${product.price * product.qty}</h3>
                                         <p>{product.description}</p>
                                         <p>{product.content}</p>

                                                <div className="amount">
                                                    <button onClick={()=> decreament(product._id)}> - </button>
                                                    <span>{product.qty}</span>
                                                    <button onClick={()=> increament(product._id)}> + </button>
                                                </div>
                        
                                     <div onClick={()=> removeProduct(product._id)} className="delete">X</div>

                    </div>
                </div>

                ))
          }
                        <div className="total">
                            <h3>Total: $ {total}</h3>
                           {/* <PayPalButton 
                           total={total}
                           tranSuccess={tranSuccess}/> */}
                        </div>
        </div>
    );
}

export default Cart;