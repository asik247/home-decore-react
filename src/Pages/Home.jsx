import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const allFurniture = useLoaderData();
    console.log(allFurniture);
  
    return (
        <div>
            <h1>Iam home</h1>
          
        </div>
    );
};

export default Home;