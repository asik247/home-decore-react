import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getDB } from '../Utility/Utiltiy';

const WhisList = () => {
    const allFurnitcre = useLoaderData();
    // console.log(allFurnitcre.id);
    const [furniture,setFurniture] = useState([]);

    useEffect(()=>{
        const storedData = getDB();
        // console.log(storedData);
        const singleFurniture = allFurnitcre.filter(singleF=>storedData.includes(singleF.id));
        setFurniture(singleFurniture);
    },[])
    return (
        <div>
            <h1>WhisList here</h1>
            <div>
                {
                    furniture.map(f=>(
                        <div>
                            <h1>{f.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default WhisList;