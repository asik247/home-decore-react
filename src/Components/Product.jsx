import React from 'react';
import SingleProduct from './SingleProduct';

const Product = ({products}) => {
    console.log(products);
    return (
        <div>
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