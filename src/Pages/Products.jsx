import React, { useEffect, useState } from 'react';
import Product from './product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("/furnitureData.json");
            const data = await res.json()
            console.log(data);
            setProducts(data)
        }
        loadData()
    }, [])
    return (
        <div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        products.map(p => (
                            <Product key={p.id} product={p}></Product>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;