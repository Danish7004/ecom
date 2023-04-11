import React,{useState, useContext} from 'react';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';

function Categories(props) {
    const state = useContext(GlobalState);
    const[categories] = state.categoriesApi.categories
    const [category, setCategory] = useState('')
    const [token] = state.token
    const [callBack, setCallBack] = state.categoriesApi.callBack
    const [onEdit, setOnEdit] = useState(false);
    const [id, setID] = useState('');

    const createCategory = async(e) =>{
        e.preventDefault()
         
        try {
            if(onEdit){
                const res = await axios.put(`/api/category/${id}`, {name: category}, {
                    headers: {Authorization: token} 
                })
                alert(res.data.msg)
            }else{

                const res = await axios.post('/api/category', {name: category}, {
                    headers: {Authorization: token}
                })
                // console.log(res)
                alert(res.data.msg)
            }
            setOnEdit(false)
            setCallBack(!callBack)
            setCategory('')
        } catch (err) {
            alert(err.response.data.msg)
        }
    };

    const editCat = async(id, name) =>{
        setID(id)
        setCategory(name)
        setOnEdit(true)
    }

    const deleteCat = async(id) =>{
        if(window.confirm("Please confirm before delete")){

        try {
            const res = await axios.delete(`/api/category/${id}`, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setCallBack(!callBack)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }}

   
    return (
        <div className= 'categories'>
            <form onSubmit={createCategory}>
                <label htmlFor="category">Category</label>
                <input type="text" name="category" value ={category} required
                onChange={e => setCategory(e.target.value)} />

                <button className='sub_btn' type="submit">{onEdit ? "Update" : "Save"}</button>
            </form>

            <div className="col">
                {
                    categories.map(cat =>(
                        <div className="row" key={cat._id}>
                            <p>{cat.name}</p>
                            <button onClick={ ()=> editCat(cat._id, cat.name)}>Edit</button>
                            <button onClick={ ()=> deleteCat(cat._id)}>Delete</button>

                        </div>
                    ))
                }
            </div>
            
        </div>
    );
}

export default Categories;