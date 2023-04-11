import React,{useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import Products from './products/Products';
import DetailProduct from './detailproducts/DetailProduct';
import Cart from './cart/Cart';
import Register from './auth/Register';
import Login from './auth/Login';
import Notfound from './utils/Notfound';
import OrderHistory from './history/OrderHistory';
import DetailHistory from './history/DetailHistory';
import Categories from './categories/Categories';
import CreateProduct from './createProducts/CreateProduct';
import { GlobalState } from '../../GlobalState';

function Pages(props) {
    const state = useContext(GlobalState);
    const [isLogged] = state.userApi.isLogged;
    const [isAdmin] = state.userApi.isAdmin;
    return (
       <Switch>
           <Route exact path='/' component={Products}  />
           <Route exact path='/detail/:id' component={DetailProduct}  />
           <Route exact path='/login' component={isLogged ? Notfound : Login}  />
           <Route exact path='/register' component={isLogged ? Notfound : Register}  />
           <Route exact path='/history' component={isLogged ? OrderHistory : Notfound }  />
           <Route exact path='/history/:id' component={isLogged ? DetailHistory : Notfound }  />

           <Route exact path='/category' component={isAdmin ? Categories : Notfound }  />
           <Route exact path='/create_product' component={isAdmin ? CreateProduct : Notfound }  />
           <Route exact path='/update_product/:id' component={isAdmin ? CreateProduct : Notfound }  />

           <Route exact path='/cart' component={Cart}  />
           <Route exact path='*' component={Notfound}  />
           
       </Switch>
    );
}

export default Pages;