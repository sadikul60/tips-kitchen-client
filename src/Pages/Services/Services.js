import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceItem from './ServiceItem';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='container mx-auto my-20'>
            <h3 className='text-3xl font-bold pb-5'>My Services: {services.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service = {service}
                    ></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;