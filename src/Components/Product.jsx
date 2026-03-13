import React, { useState } from 'react';
import SingleProduct from './SingleProduct';

const Product = ({ products }) => {
    // console.log(products);
    const [sarchValue, setSearchValue] = useState('');
    // console.log(sarchValue);
    const trims = sarchValue.trim().toLocaleLowerCase();
    // console.log(trims);

    const searchValues = trims ? products.filter(product => product.name.toLocaleLowerCase().includes(trims)) : products
    console.log(searchValues);


    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 mt-6 gap-4">

                <h1 className="text-3xl font-bold text-gray-800">
                    All Products
                    <span className="text-blue-600 ml-2">
                        ({searchValues.length}) is found
                    </span>
                </h1>

                <input
                    value={sarchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="search"
                    placeholder="Search furniture..."
                    className="w-full md:w-72 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

            </div>


            {
                searchValues.length === 0 ? (
                    <div className="text-center text-red-500 text-lg mt-12">
                        No products found for "{sarchValue}"
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {searchValues.map(p => (
                            <SingleProduct key={p.id} p={p}></SingleProduct>
                        ))}
                    </div>
                )
            }


        </div>
    );
};

export default Product;