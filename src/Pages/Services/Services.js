import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <h3>Services: {services.length}</h3>
        </div>
    );
};

export default Services;