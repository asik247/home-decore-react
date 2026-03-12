import React, { useEffect, useState } from 'react';
import Product from './product';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect  (()=>{
       const loadData =async ()=>{
            const res =await fetch("/furnitureData.json");
            const data = await res.json()
            console.log(data);
            setProducts(data)
       }
       loadData()
    },[])
    return (
        <div>
          {
            // console.log(products)
            products.map(product=><Product product={product}></Product>)
          }
        </div>
    );
};

export default Products;