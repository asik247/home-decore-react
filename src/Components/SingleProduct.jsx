import React from 'react';
import { NavLink } from 'react-router';

const SingleProduct = ({ p }) => {

    const { id, name, image, price, description } = p;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 mt-10">
            
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                    {name}
                </h2>

                <p className="text-gray-600 mb-4">
                    {description || "Nice quality furniture for your home."}
                </p>

                <p className="text-lg font-bold text-blue-600">
                    ${price}
                </p>
            </div>

            <div className="flex justify-center items-center mb-4">
                <NavLink to={`/details/${id}`}>
                    <button className="btn btn-secondary">
                        View Details
                    </button>
                </NavLink>
            </div>

        </div>
    );
};

export default SingleProduct;