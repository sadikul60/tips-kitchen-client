import React from 'react';
import { HiStar } from "react-icons/hi";

const ServiceItem = ({service}) => {
    const {name, price, description, img, ratings} = service;
    return (
        <div className="card w-full bg-slate-400 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="w-full rounded-xl" />
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
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions">
                <button className="btn btn-primary mt-3 w-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;