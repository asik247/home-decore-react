import React from 'react';
import { useLoaderData } from 'react-router';

const WhisList = () => {
    const allFurnitcre = useLoaderData();
    console.log(allFurnitcre);
    return (
        <div>
            <h1>WhisList here</h1>
        </div>
    );
};

export default WhisList;