import React,{useContext, useState, useEffect} from 'react';
import axios from 'axios';
import { GlobalState } from '../../../GlobalState';
import Loading from '../utils/Loading';
import {useHistory, useParams} from 'react-router-dom'

const initialState ={
    product_id: "",
    title: "",
    price:"",
    description:"this row description we are setting are u understanding or not",
    content: "this is content",
    category: "" ,
    _id:""
}



function CreateProduct(props) {
    const state = useContext(GlobalState);
    const [isAdmin] = state.userApi.isAdmin
    const [token] = state.token
    const [categories] = state.categoriesApi.categories
    const [callBack, setCallBack ] = state.productsApi.callBack

    const [product, setProduct] = useState(initialState)
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)

    const history = useHistory()
    const params = useParams()

    const [onEdit, setOnEdit] = useState(false)
    const [products] = state.productsApi.products

    useEffect(()=>{
        if(!isAdmin) return alert('This is only Admin access')
        if(params.id){
            setOnEdit(true)
            products.forEach(product =>{
                if(product._id === params.id) {
                setProduct(product)
                setImages(product.images)
                  }   
            })
           
        }else{
            setOnEdit(false)
            setProduct(initialState)
            setImages(false)
        }
    }, [params.id,isAdmin, products])


    const styleUpload = {
        display: images ? "block" : "none"
    }

    
    const handleUpload = async(e) =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert('This is only Admin access')
            const file = e.target.files[0] 
            // console.log(file)
            if(!file) return alert('file does not exist')
            if(file.size > 1024 * 1024) return alert('file size is too large')

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') 
                    return alert('file formet is incorrect')

            let formData  = new FormData()
            formData.append('file', file)

                setLoading(true)
            const res  = await axios.post('https://my-ecom-services.onrender.com/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })    

            // console.log(res)
            setLoading(false)
            setImages(res.data)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const removeImage = async () =>{
        try {
            if(!isAdmin) return alert('This is only Admin access')
            setLoading(true)
            await axios.post('https://my-ecom-services.onrender.com/api/destroy', {public_id: images.public_id }, {
                headers: { Authorization: token}
            })
                setLoading(false)
                setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    
    const onchangeInput = e =>{
        const {name, value} = e.target
        setProduct({...product, [name]: value})
        // console.log(product)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert('This is only Admin access')
            if(!images) return alert('No image is slected')

            if(onEdit){
                await axios.put(`https://my-ecom-services.onrender.com/api/products/${product._id}`, {...product, images}, {
                    headers: { Authorization: token}
                })

            }else{
                await axios.post('https://my-ecom-services.onrender.com/api/products', {...product, images}, {
                    headers: { Authorization: token}
                })
            }
            setImages(false)
            setProduct(initialState)
            setCallBack(!callBack)
            history.push("/")

        } catch (err) {
            alert(err.response.data.msg)
        }
    }



    return (
        <div className="margin">
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                    loading ? <div className="file_img"><Loading/></div>

                   : <div className="file_img" style={styleUpload}>
                    <img src={images ? images.url : ""} alt=""/>
                    <span onClick={removeImage}>X</span>
                </div>
                }
                
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="product_id">Product ID</label>
                    <input type="text" name="product_id" id="product_id" required 
                    value={product.product_id} onChange={ (e)=> onchangeInput(e)} disabled={onEdit}/>
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                     value={product.title} onChange={ (e)=> onchangeInput(e)} />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required
                     value={product.price} onChange={ (e)=> onchangeInput(e)}/>
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                     value={product.description} rows="5" onChange={ (e)=> onchangeInput(e)}/>
                </div>

                
                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required 
                    value={product.content} rows="/" onChange={(e)=> onchangeInput(e)}/>
                </div>

                <div className="row">
                    <label htmlFor="categories">Categories</label>
                    <select name="category" id="category"
                     value={product.category} onChange={ (e)=> onchangeInput(e)}>

                        <option value="">Please select a category</option>
                        {
                            categories.map(category =>(
                                <option value={category._id} key={category._id} >
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <button type="submit">{onEdit ? "Update" : "Create"}</button>
                
            </form>
            
        </div>
        </div>

        
    );
}

export default CreateProduct;