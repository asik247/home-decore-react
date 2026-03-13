import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const matchData = useLoaderData();
    // console.log(matchData);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl p-6">

                {/* Image */}
                <div>
                    <img
                        src={matchData.image}
                        alt={matchData.name}
                        className="w-full h-80 object-cover rounded-lg"
                    />
                </div>

                {/* Details */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {matchData.name}
                    </h1>

                    <p className="text-gray-500">{matchData.description}</p>

                    <div className="space-y-2 text-lg">
                        <p>
                            <span className="font-semibold">Category:</span> {matchData.category}
                        </p>

                        <p>
                            <span className="font-semibold">Material:</span> {matchData.material}
                        </p>

                        <p>
                            <span className="font-semibold">Dimensions:</span> {matchData.dimensions}
                        </p>

                        <p className="text-2xl font-bold text-green-600">
                            ${matchData.price}
                        </p>

                        <p className={matchData.stock ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>
                            {matchData.stock ? "In Stock" : "Out of Stock"}
                        </p>
                    </div>

                    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Add To WishList
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Details;