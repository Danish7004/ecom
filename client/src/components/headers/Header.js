import React, {useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//components import
import { GlobalState } from '../../GlobalState';
//icons import
import Menu from './icons/menu.svg';
import Close from './icons/close.svg';
import Cart from './icons/cart.svg';

function Header(props) {
    const state = useContext(GlobalState)
    // console.log(state)

    // const [isLogged, setIsLogged] = state.userApi.isLogged
    // const [isAdmin, setIsAdmin] = state.userApi.isAdmin
    // const [cart, setCart] = state.userApi.cart
                //OR
        const [isLogged] = state.userApi.isLogged
        const [isAdmin] = state.userApi.isAdmin
        const [cart] = state.userApi.cart

        const [menu, setMenu] = useState(false)

    const logoutUser = async() =>{
        await axios.get('https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/user/logout')
        localStorage.clear()
        // setIsAdmin(false)
        // setIsLogged(false)
        // setCart([])
            //OR
      window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
            <li><Link to = '/create_product'>Create Product</Link></li>
            <li><Link to = '/category'>Categories</Link></li>
            </>
        )
    };

    const loggedRouter = () =>{
        return(
            <>
            <li><Link to = '/history'>History</Link></li>
            <li><Link to = '/' onClick={logoutUser}>Logout</Link></li>
            </>
        )
    };

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header>
            <div className='menu' onClick = {() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30"/>
            </div>

            <div className='logo'>
                <h1>
                    <Link to='/'>{isAdmin ? 'Admin' : 'fashion Destiny'}</Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to='/'>{isAdmin ? 'Products' : 'Shop'}</Link></li>

                {isAdmin && adminRouter()}
                {
                    isLogged ? loggedRouter() : <li><Link to='/login'>Login or Register</Link></li>
                }

                <li onClick = {() => setMenu(!menu)}>
                    <img src={Close} alt='' width="30" className='menu' />
                </li>
            </ul>

                {
                    isAdmin ? ''
                     :  <div className='cart-icon'>
                    <span>{cart.length}</span>
                    <Link to='/cart'>
                    <img src={Cart} alt="" width="30"/>
                    </Link>
                </div>
                }
           
        </header>
    );
}

export default Header;