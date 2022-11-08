import React from 'react';
import { HiStar } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { img, name, price, description, ratings} = service;
    console.log(img)
    return (
        <div className='container mx-auto'>
            <div>
            <div className="card w-11/12 lg:w-1/2 mx-auto bg-slate-400 shadow-xl my-20">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="w-full h-1/2 rounded-xl" />
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
                        <p className='text-center'>{ratings}</p>
                    </div>
                    <p>{description}</p>
                    <div className="">
                    <Link to='/services'><button className="btn btn-primary mt-3 w-full">Go Back</button></Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;