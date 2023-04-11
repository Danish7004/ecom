import React, {useContext} from 'react';
import { GlobalState } from '../../../GlobalState';

function Filters(props) {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesApi.categories
    const [category, setCategory] = state.productsApi.category;
    const [sort, setSort] = state.productsApi.sort;
    const [search, setSearch] = state.productsApi.search;


    const handleCtategry = (e) =>{
        setSearch(" ")
        setCategory(e.target.value)
    }
    return (
        <div className="filter_menu">
            <div className="row">
                <span>Filters: </span>
                <select name="category" value={category} onChange={handleCtategry}>
                    <option value="">All Products</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }

                </select>
            </div>

            <input type="search" name={search} placeholder="Search"
            onChange={ (e) => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Sort By: </span>
                <select name="sort" value={sort} onChange={ e => setSort(e.target.value)}>
                    <option value="">Newest</option>
                    <option value="sort=oldest">oldest</option>
                    <option value="sort=-sold">Best Sales</option>
                    <option value="sort=-price">Price: High-Low</option>
                    <option value="sort=price">Price: Low-High</option>
                   

                </select>
            </div>

        </div>
    );
}

export default Filters;