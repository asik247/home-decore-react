import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getDB, removeDB } from '../Utility/Utiltiy';

const WhisList = () => {
    const allFurniture = useLoaderData();
    const [furniture, setFurniture] = useState([]);
    const [sorType, setSorType] = useState("")

    useEffect(() => {
        const storedData = getDB();
        console.log(storedData);
        const singleFurniture = allFurniture.filter(f => storedData.includes(f.id));
        setFurniture(singleFurniture);
    }, []);


    const handleRemove = (id) => {
        console.log(id);
        const furnutureRemove = furniture.filter(itme => itme.id !== id);
        setFurniture(furnutureRemove)
        removeDB(id)
    }

    // sorted code here;
    const handleHigh = () => {
        const sortedData = [...furniture].sort((a, b) => b.price - a.price)
        setFurniture(sortedData)
        setSorType("price high")
    }
    const handleLow = () => {
        const sortedData = [...furniture].sort((a, b) => a.price - b.price)
        setFurniture(sortedData)
        setSorType("price Low")

    }


    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">My Wishlist {furniture.length}</h1>

            <details className="dropdown">
                <summary className="btn m-1">
                    Sort By {sorType && `: ${sorType}`}
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={handleHigh}>Price High</a></li>
                    <li><a onClick={handleLow}>Price Low</a></li>
                </ul>
            </details>

            {furniture.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No items in your wishlist.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {furniture.map(f => (
                        <div
                            key={f.id}
                            className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 gap-4"
                        >
                            {/* Image */}
                            <img
                                src={f.image}
                                alt={f.name}
                                className="w-full sm:w-32 h-32 object-cover rounded-lg"
                            />

                            {/* Name + Price */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="text-lg font-semibold">{f.name}</h2>
                                <p className="text-blue-600 font-bold mt-1">${f.price}</p>
                            </div>

                            {/* Remove Button */}
                            <div className="mt-2 sm:mt-0">
                                <button onClick={() => handleRemove(f.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WhisList;