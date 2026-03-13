import React from 'react';
import SingleProduct from './SingleProduct';

const Product = ({products}) => {
    console.log(products);
    return (
        <div>
            <h1 className='font-bold text-2xl mt-4'>All Products ({products.length})</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(p=>(
                        <SingleProduct p={p}></SingleProduct>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;