import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <h2>Service {services?.length}</h2>
        </div>
    );
};

export default Home;