import React, { useState } from 'react';
import SingleProduct from './SingleProduct';

const Product = ({products}) => {
    // console.log(products);
    const [sarchValue,setSearchValue] = useState('');
    // console.log(sarchValue);
    const trims = sarchValue.trim().toLocaleLowerCase();
    // console.log(trims);

    const searchValues = trims? products.filter(product=>product.name.toLocaleLowerCase().includes(trims)):products
    console.log(searchValues);
    
    return (
        <div>
            <div className='flex justify-between items-center'>
                 <h1 className='font-bold text-2xl mt-4'>All Products ({searchValues.length})</h1>
                 <input value={sarchValue} onChange={e=>setSearchValue(e.target.value)}  type="search" placeholder='Search' />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    searchValues.map(p=>(
                        <SingleProduct key={p.id} p={p}></SingleProduct>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;