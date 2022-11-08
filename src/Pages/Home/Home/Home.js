import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';


const Home = () => {
    const services = useLoaderData();
    
    console.log(services)

    return (
        <div className='container mx-auto my-20'>
            <h2 className='text-3xl font-bold pb-5'>My Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service = {service}
                    ></Service>)
                }
            </div>
            <Link to='/services'><button className='btn btn-primary mt-12'>Views All</button></Link>
        </div>
    );
};

export default Home;