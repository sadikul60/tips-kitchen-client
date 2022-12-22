import React from 'react';
import { HiStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './Service.css'

const Service = ({service}) => {
    const {_id, img, name, price, description, ratings} = service;
    return (
        <div className="card-service w-full bg-slate-400 shadow-xl">
            <figure className="p-6">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Shoes" className="w-full h-48 rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="mx-6 mb-8 text-start">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p className='text-xl font-bold text-start'>Price: $<span className=''>{price}</span></p>
                <div className='flex justify-between text-xl items-center'>
                    <p className='flex text-warning'> 
                        <HiStar />
                        <HiStar />
                        <HiStar />
                        <HiStar />
                        <HiStar />
                    </p>
                    <p className='text-center'>{ratings}k</p>
                </div>
                <p className='text-xl mt-3'>{description.slice(0, 100)}...</p>
            </div>
            <div>
                <Link to={`/services/details/${_id}`}><button className="btn btn-primary mt-3 w-full rounded-none">View Details</button></Link>
            </div>
        </div>
    );
};

export default Service;