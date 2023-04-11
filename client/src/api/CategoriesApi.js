import {useState, useEffect} from 'react';
import axios from 'axios';

function CategoriesApi() {
    const [categories, setCategories] = useState([])
    const [callBack, setCallBack] = useState(false)

    useEffect(()=>{
        
            const getCategories  = async() =>{
                const res = await axios.get('https://my-ecom-services.onrender.com/api/category')
                // console.log(res)
                setCategories(res.data)
            }  
            getCategories()
        
        
    }, [callBack])

    return ({
       categories: [categories, setCategories],
       callBack: [callBack, setCallBack]
    });
}

export default CategoriesApi;