import React, { useState } from 'react';
import SingleProduct from './SingleProduct';

const Product = ({products}) => {
    // console.log(products);
    const [sarchValue,setSearchValue] = useState('');
    const handler = (e)=>{
        const searchV = e.target.value;
        console.log(searchV);
        setSearchValue(searchV)
    }
    return (
        <div>
            <div className='flex justify-between items-center'>
                 <h1 className='font-bold text-2xl mt-4'>All Products ({products.length})</h1>
                 <input value={sarchValue} onChange={handler} type="search" placeholder='Search' />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(p=>(
                        <SingleProduct key={p.id} p={p}></SingleProduct>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;