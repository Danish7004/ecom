import axios from 'axios';
import {useState, useEffect} from 'react';

function UserApi(token) {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(()=>{

        if(token){
            const getUser = async() =>{

                try {
                    const res = await axios.get('https://my-ecom-services.onrender.com/user/info', {
                        headers: {Authorization: token}
                    })
                        setIsLogged(true)
                        res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                        // console.log(res);
 
                        setCart(res.data.cart)

                } catch (err) {
                    alert(err.response.data.msg)
                }

            }
            getUser();
        };
        
    }, [token]);


useEffect(()=>{
    if(token){
        const getHistory = async() =>{
            if(isAdmin){
                const res = await axios.get('https://my-ecom-services.onrender.com/api/payment', {
                    headers: {Authorization: token}
                })
                setHistory(res.data)
            }else{

                const res = await axios.get('https://my-ecom-services.onrender.com/user/history', {
                    headers:{Authorization: token}
                })
                // console.log(res)
                setHistory(res.data)
            }
        }
       getHistory()
    }
},[token, callback, isAdmin])


    const addCart = async(product) =>{
        if(!isLogged) return alert("Please login to continue...")

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, qty: 1}])

            await axios.patch('https://my-ecom-services.onrender.com/user/addcart', {cart: [...cart, {...product, qty: 1}]}, {
                headers: {Authorization: token}
            })
        }else{
            alert("Product has been add to cart")
        }
    }

    return (
        {
            //HERE we are passing it to the otherfiles..
            isLogged:[isLogged, setIsLogged],
            isAdmin:[isAdmin, setIsAdmin],
            cart: [cart, setCart],
            history: [history, setHistory],
            callback: [callback, setCallback],

            addCart: addCart //this is HERE bcz of, WE ARE CALLING IT OnClick IN THE BtnRender.js so it does not 
                            //execute without click
        
        });
}

export default UserApi;