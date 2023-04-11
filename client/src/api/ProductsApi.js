import {useState, useEffect } from 'react';
import axios from 'axios';

function ProductsApi(props) {
    const [products, setProducts] = useState([])
    const [callBack, setCallBack ] = useState(false);
    //filtering
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState(" ");
    const [search, setSearch] = useState(" ");
    const [page, setPage] = useState(1);
    const [result, setResult] = useState(" ");


    useEffect(()=>{

    const getProducts = async() =>{
        const res = await axios.get(`https://my-ecom-services.onrender.com/api/products?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
        console.log(res)
        // console.log(res.data.products);
        setProducts(res.data.products);
        // console.log(res)
        setResult(res.data.result)
    }
        getProducts()
    }, [callBack, page, category, sort, search])

    return {

        products: [products, setProducts],
        callBack: [callBack, setCallBack ],
        category: [category, setCategory],
        sort:  [sort, setSort],
        page: [page, setPage],
        search: [search, setSearch],
        result: [result, setResult]
    };
}

export default ProductsApi;