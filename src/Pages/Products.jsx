import React, { useEffect, useState } from 'react';
import Product from '../Components/Product';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("/furnitureData.json");
            const data = await res.json()
            // console.log(data);
            setProducts(data)
        }
        loadData()
    }, [])
    return (
        <div>
          <Product products={products}></Product>
        
        </div>
    );
};

export default Products;