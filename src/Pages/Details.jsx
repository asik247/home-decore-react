import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const matchData = useLoaderData()
    console.log(matchData);
    return (
        <div>
            <h1>Iam Cards details pages</h1>
        </div>
    );
};

export default Details;