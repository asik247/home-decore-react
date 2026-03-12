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
         <div className='grid md:grid-cols-3 gap-4'>
             {
           
            products.map(product=><Product product={product}></Product>)
          }
         </div>
        </div>
    );
};

export default Products;