import React,{createContext, useState, useEffect} from "react";
import axios from 'axios';
import ProductsApi from "./api/ProductsApi";
import UserApi from "./api/UserApi";
import CategoriesApi from "./api/CategoriesApi";

export const GlobalState = createContext();

export const DataProvider = ({children}) =>{

    const [token, setToken] = useState(false)

    const refreshToken = async () =>{
        const res = await axios.get('/user/refresh_token')
        // console.log(res);
        setToken(res.data.accesstoken)
    }

    useEffect(()=>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    }, [])

    const state = {
        token: [token, setToken],
        productsApi:ProductsApi() ,
        userApi: UserApi(token),
        categoriesApi: CategoriesApi(token)
    }
    

    return(
        <GlobalState.Provider value = {state}>
            {children}
        </GlobalState.Provider>
    )
}