import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const allFurniture = useLoaderData();
    console.log(allFurniture);
    const furniture6 = allFurniture.slice(0, 6)
    console.log(furniture6);

    return (
        <div>
            <h1>Iam home</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    furniture6.map(item =>(<div>
                        <h1>{item.name}</h1>
                    </div>))
                }
            </div>

        </div>
    );
};

export default Home;