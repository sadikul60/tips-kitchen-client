import React, { useContext } from 'react';
import { HiStar } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexs/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviesField from './ReviesField';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const { img, name, price, description, ratings} = service;

    // added route title
    useTitle('Details');
    
    return (
        <div className='container mx-auto my-20'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div className="card w-11/12 lg:w-full mx-auto bg-slate-400 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="w-full h-full rounded-xl" />
                    </figure>
                    <div className="card-body text-start">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-lg font-bold text-start'>Price: ${price}</p>
                        <div className='flex justify-between'>
                            <p className='flex text-warning text-xl'> 
                                <HiStar />
                                <HiStar />
                                <HiStar />
                                <HiStar />
                                <HiStar />
                            </p>
                            <p className='text-center'>{ratings}k</p>
                        </div>
                        <p>{description}</p>
                        <div className="">
                        <Link to='/services'><button className="btn btn-primary mt-3 w-full">Go Back</button></Link>
                    </div>
                    </div>
                </div>

                {/* review section  */}
                {
                    user?.uid ?
                    <ReviesField
                        service = {service}
                    ></ReviesField>
                    :
                    <div className='w-11/12 lg:w-full mx-auto bg-slate-400 p-3 shadow-2xl rounded-xl'>
                        <p className='text-sm md:text-2xl lg:text-3xl font-bold'>Please login to add a Review <Link to ='/login'><button className='btn btn-primary'>Login</button></Link></p>
                    </div>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;