import React, { useState } from 'react';
import SingleProduct from './SingleProduct';

const Product = ({products}) => {
    // console.log(products);
    const [sarchValue,setSearchValue] = useState('');
    console.log(sarchValue);
    const trims = sarchValue.trim().toLocaleLowerCase();
    console.log(trims);
    
    return (
        <div>
            <div className='flex justify-between items-center'>
                 <h1 className='font-bold text-2xl mt-4'>All Products ({products.length})</h1>
                 <input value={sarchValue} onChange={e=>setSearchValue(e.target.value)}  type="search" placeholder='Search' />
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