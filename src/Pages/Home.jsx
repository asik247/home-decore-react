import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const allFurniture = useLoaderData();
    const furniture6 = allFurniture.slice(0, 6);

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Our Furniture</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {furniture6.map(item => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-600 mb-4">{item.description || 'Nice quality furniture for your home.'}</p>
                            <p className="text-lg font-bold text-blue-600">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;